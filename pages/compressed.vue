<template>
  <div class="container">
    <h1>视频格式转换</h1>
    <div class="upload-container">
      <v-file-input
        v-model="selectedFile"
        accept="video/*"
        label="选择视频文件"
        prepend-icon="mdi-video"
        show-size
        truncate-length="30"
      ></v-file-input>

      <div v-if="selectedFile" class="format-settings mt-4">
        <v-card>
          <v-card-text>
            <p v-if="sourceFormat">源文件格式: {{ sourceFormat }}</p>
            
            <v-select
              v-model="targetFormat"
              :items="formatOptions"
              label="目标格式"
              class="mb-4"
            ></v-select>
            
            <v-select
              v-model="videoCodec"
              :items="getCodecOptions"
              label="视频编码"
              class="mb-4"
            ></v-select>

            <v-select
              v-model="audioCodec"
              :items="audioCodecOptions"
              label="音频编码"
              class="mb-4"
            ></v-select>

            <v-select
              v-model="quality"
              :items="qualityOptions"
              label="转换质量"
              class="mb-4"
            ></v-select>

            <v-slider
              v-model="videoBitrate"
              :min="500"
              :max="8000"
              :step="500"
              label="视频比特率 (Kbps)"
              thumb-label
              class="mb-4"
            ></v-slider>

            <v-slider
              v-model="audioBitrate"
              :min="64"
              :max="320"
              :step="32"
              label="音频比特率 (Kbps)"
              thumb-label
              class="mb-4"
            ></v-slider>
            
            <v-progress-linear
              v-if="progressVal > 0 && progressVal < 100"
              v-model="progressVal"
              color="primary"
              height="25"
            >
              <template v-slot:default>
                <strong>{{ Math.ceil(progressVal) }}%</strong>
              </template>
            </v-progress-linear>

            <v-btn
              color="primary"
              block
              :loading="isConverting"
              :disabled="isConverting"
              class="mt-4"
              @click="startConversion"
            >
              {{ isConverting ? '转换中...' : '开始转换' }}
            </v-btn>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <div v-if="videoUrl" class="video-container mt-4">
      <v-card>
        <v-card-title>转换完成</v-card-title>
        <v-card-text>
          <video :src="videoUrl" controls class="w-100"></video>
          <v-btn
            color="primary"
            block
            class="mt-4"
            @click="downloadVideo"
          >
            下载转换后的视频
          </v-btn>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

const message = ref<string>('')
const videoUrl = ref<string>('')
const ffmpeg = ref<FFmpeg | null>(null)
const progressVal = ref(0)
const sourceFormat = ref('')
const targetFormat = ref('mp4')
const videoCodec = ref('h264')
const audioCodec = ref('aac')
const quality = ref('medium')
const videoBitrate = ref(2000)
const audioBitrate = ref(128)
const selectedFile = ref<File | null>(null)
const isConverting = ref(false)

// 格式选项
const formatOptions = [
  { title: 'MP4', value: 'mp4' },
  { title: 'WebM', value: 'webm' },
  { title: 'MOV', value: 'mov' },
  { title: 'MKV', value: 'mkv' },
  { title: 'GIF', value: 'gif' },
  { title: 'AVI', value: 'avi' }
]

// 根据目标格式获取可用的编码器选项
const getCodecOptions = computed(() => {
  switch (targetFormat.value) {
    case 'webm':
      return [
        { title: 'VP8', value: 'vp8' },
        { title: 'VP9', value: 'vp9' }
      ]
    case 'gif':
      return [{ title: 'GIF', value: 'gif' }]
    default:
      return [
        { title: 'H.264', value: 'h264' },
        { title: 'H.265/HEVC', value: 'hevc' },
        { title: 'MPEG-4', value: 'mpeg4' }
      ]
  }
})

// 音频编码器选项
const audioCodecOptions = computed(() => {
  if (targetFormat.value === 'gif') return []
  
  return [
    { title: 'AAC', value: 'aac' },
    { title: 'MP3', value: 'mp3' },
    { title: 'Opus', value: 'opus' },
    { title: 'Vorbis', value: 'vorbis' }
  ]
})

// 质量选项
const qualityOptions = [
  { title: '超高质量 (非常慢)', value: 'veryhigh' },
  { title: '高质量 (慢速转换)', value: 'high' },
  { title: '中等质量 (推荐)', value: 'medium' },
  { title: '低质量 (快速转换)', value: 'low' },
  { title: '极速转换 (低质量)', value: 'verylow' }
]

// 获取编码参数
const getEncodingParams = () => {
  const params = []
  
  // 视频编码器设置
  switch (videoCodec.value) {
    case 'h264':
      params.push('-c:v', 'libx264')
      break
    case 'hevc':
      params.push('-c:v', 'libx265')
      break
    case 'vp8':
      params.push('-c:v', 'libvpx')
      break
    case 'vp9':
      params.push('-c:v', 'libvpx-vp9')
      break
    case 'mpeg4':
      params.push('-c:v', 'mpeg4')
      break
  }

  // 音频编码器设置
  if (targetFormat.value !== 'gif') {
    switch (audioCodec.value) {
      case 'aac':
        params.push('-c:a', 'aac')
        break
      case 'mp3':
        params.push('-c:a', 'libmp3lame')
        break
      case 'opus':
        params.push('-c:a', 'libopus')
        break
      case 'vorbis':
        params.push('-c:a', 'libvorbis')
        break
    }
  }

  // 质量设置
  if (videoCodec.value === 'h264' || videoCodec.value === 'hevc') {
    switch (quality.value) {
      case 'veryhigh':
        params.push('-crf', '16', '-preset', 'veryslow')
        break
      case 'high':
        params.push('-crf', '18', '-preset', 'slow')
        break
      case 'medium':
        params.push('-crf', '23', '-preset', 'medium')
        break
      case 'low':
        params.push('-crf', '28', '-preset', 'fast')
        break
      case 'verylow':
        params.push('-crf', '32', '-preset', 'ultrafast')
        break
    }
  }

  // 比特��置
  if (targetFormat.value !== 'gif') {
    params.push('-b:v', `${videoBitrate.value}k`)
    params.push('-b:a', `${audioBitrate.value}k`)
  }

  // GIF 特殊处理
  if (targetFormat.value === 'gif') {
    params.push(
      '-vf',
      'fps=15,scale=320:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse'
    )
  }

  return params
}

// 初始化 FFmpeg
const initFFmpeg = async () => {
  try {
    if (ffmpeg.value) return

    ffmpeg.value = new FFmpeg()
    const baseURL = 'https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm'
    
    message.value = '加载 FFmpeg 核心文件...'

    // ffmpeg.value.on('progress', ({ progress, time }) => {
    //   console.log("progress",progress)
    // })  
  //   ffmpeg.value.on('log', e => {
  //   console.log(e.message)
  // })

    await ffmpeg.value.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript')
    })
    
    message.value = 'FFmpeg 加载完成'
  } catch (err: any) {
    message.value = `FFmpeg 加载失败: ${err?.message || '未知错误'}`
    console.error('FFmpeg 加载失败:', err)
    ffmpeg.value = null
  }
}

// 获取文件扩展名
const getFileExtension = (file: File): string => {
  // 先尝试从文件名获取扩展名
  const ext = file.name.split('.').pop()?.toLowerCase()
  if (ext) return ext

  // 如果没有扩展名，从 MIME 类型推断
  const mimeToExt: Record<string, string> = {
    'video/mp4': 'mp4',
    'video/webm': 'webm',
    'video/quicktime': 'mov',
    'video/x-matroska': 'mkv',
    'video/x-msvideo': 'avi',
    'video/x-flv': 'flv',
    'video/3gpp': '3gp',
    'video/x-ms-wmv': 'wmv'
  }
  
  return mimeToExt[file.type] || 'mp4' // 默认返回 mp4
}

// 获取视频格式
const getVideoFormat = async (file: File) => {
  try {
    if (!ffmpeg.value) return
    
    const inputExt = getFileExtension(file)
    const probeFile = `probe.${inputExt}`
    
    await ffmpeg.value.writeFile(probeFile, await fetchFile(file))
    await ffmpeg.value.exec(['-i', probeFile])
    
    // 清理探测文件
    await ffmpeg.value.deleteFile(probeFile)
  } catch (err: any) {
    // FFmpeg 在探测文件时会抛出错误,但错误信息中包含格式信息
    const formatMatch = err.message.match(/Input #0,\s*([^,]+)/)
    if (formatMatch) {
      sourceFormat.value = formatMatch[1].trim()
    }
  }
}

// 监听文件选择
watch(selectedFile, async (file) => {
  if (file) {
    // 重置状态
    videoUrl.value = ''
    progressVal.value = 0
    sourceFormat.value = ''
    
    // 初始化 FFmpeg (如果需要)
    if (!ffmpeg.value) {
      await initFFmpeg()
    }
    
    // 获取源文��格式
    // if (ffmpeg.value) {
      // await getVideoFormat(file)
    // }
  }
})

// 开始转换
const startConversion = async () => {
  if (!selectedFile.value || !ffmpeg.value || isConverting.value) return
  
  try {
    isConverting.value = true
    message.value = '开始转换视频...'
    progressVal.value = 0
    
    // 获取输入文件的实际格式
    const inputExt = getFileExtension(selectedFile.value)
    const inputFile = `input.${inputExt}`
    const outputFile = `output.${targetFormat.value}`
    
    // 写入文到 FFmpeg 虚拟文件系统
    await ffmpeg.value.writeFile(inputFile, await fetchFile(selectedFile.value))
    
    // 获取视频时长用于计算进度
    const duration = await getVideoDuration(selectedFile.value)
    
    // 添加进度监听
    // ffmpeg.value.on('progress', ({ progress, time }) => {
    //   if (duration > 0) {
    //     progressVal.value = (time / duration) * 100
    //   }
    // })
    
    // 执行转换命令
    const params = [
      '-i', inputFile,
      ...getEncodingParams(),
      outputFile
    ]

    await ffmpeg.value.exec(params)
    
    // 读取转换后的文件
    const data = await ffmpeg.value.readFile(outputFile)
    const uint8Array = new Uint8Array(data as ArrayBuffer)
    
    // 根据目标格式设置正确的 MIME 类型
    const mimeType = targetFormat.value === 'gif' 
      ? 'image/gif' 
      : `video/${targetFormat.value}`
    
    videoUrl.value = URL.createObjectURL(
      new Blob([uint8Array], { type: mimeType })
    )
    
    progressVal.value = 100
    message.value = '视频转换完成!'

    // 清理临时文件
    await ffmpeg.value.deleteFile(inputFile)
    await ffmpeg.value.deleteFile(outputFile)
  } catch (err: any) {
    message.value = `视频转换失败: ${err?.message || '未知错误'}`
    console.error('视频转换失败:', err)
    progressVal.value = 0
  } finally {
    isConverting.value = false
  }
}

// 获取视频时长
const getVideoDuration = (file: File): Promise<number> => {
  return new Promise((resolve) => {
    const video = document.createElement('video')
    video.preload = 'metadata'
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(video.src)
      resolve(video.duration)
    }
    video.src = URL.createObjectURL(file)
  })
}

// 下载转换后的视频
const downloadVideo = () => {
  if (!videoUrl.value) return
  
  const a = document.createElement('a')
  a.href = videoUrl.value
  a.download = `converted_video.${targetFormat.value}`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

// 组件卸载时清理资源
onUnmounted(() => {
  if (videoUrl.value) {
    URL.revokeObjectURL(videoUrl.value)
  }
})
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.format-settings {
  max-width: 100%;
}

.video-container video {
  max-width: 100%;
  margin-top: 10px;
}
</style>
