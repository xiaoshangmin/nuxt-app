<template>
  <v-container>
    <v-row class="flex-column flex-md-row">
      <!-- 左侧富文本编辑区域 -->
      <v-col cols="12" md="4" order="2" order-md="1">
        <v-sheet rounded="lg" class="pa-4 editor-sheet">
          <div v-if="isClient">
            <div ref="quillEditor" class="quill-container" @click="focusEditor"></div>
          </div>
          <!-- 添加滑块组件 -->
          <v-slider
            v-model="overlayHeight"
            :min="20"
            :max="200"
            :step="1"
            label="文字区域高度"
            thumb-label="always"
            class="mt-12"
          ></v-slider>
          <div class="d-flex justify-center">
            <v-btn @click="generateImage" class="text-none mt-4" :text="$t('Download Image')" prepend-icon="mdi-download"
            elevation="12" size="x-large" width="180px" height="55px" rounded="xl">
            {{ $t("Download Image") }}
          </v-btn>
          </div>
        </v-sheet>
      </v-col>
      <!-- 右侧图片上传区域 -->
      <v-col cols="12" md="8" order="1" order-md="2">
        <div
          class="d-flex cursor-pointer rounded-xl position-relative"
          @click="upload"
        >
          <!-- 图片容器 -->
          <div class="image-container" ref="zimu">
            <!-- 原始图片 -->
            <template v-if="base64Image">
              <div
                v-if="textSections.length === 0"
                class="image-section"
                :style="getSectionStyle(0)"
              >
                <v-img
                  :src="base64Image"
                  alt="图片"
                  :style="imageStyle"
                  class="responsive-image"
                ></v-img>
              </div>
              <div
                v-else
                v-for="(section, index) in textSections"
                :key="index"
                class="image-section"
                :style="getSectionStyle(index)"
              >
                <v-img
                  :src="base64Image"
                  alt="图片"
                  :style="imageStyle"
                  class="responsive-image"
                ></v-img>
                <div class="text-overlay" v-html="section"></div>
              </div>
            </template>
            <v-icon
              v-if="!base64Image"
              icon="mdi-plus-box"
              size="130px"
            ></v-icon>
          </div>
        </div>
        <v-file-input
          ref="uploadRef"
          label=""
          :rules="rules"
          prepend-icon=""
          v-model="files"
          @change="uploadImg"
          class="custom-file-input"
        >
        </v-file-input>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import html2canvas from "html2canvas";
const isClient = ref(false);
const editorContent = ref('');
const quillEditor = ref(null);
const zimu = ref(null);
let quillInstance = null;


useSeoMeta({
  title: "拼字幕 - 快速生成字幕拼图 | labs.wowyou.cc",
  ogTitle: "拼字幕 - 快速生成字幕拼图 | labs.wowyou.cc",
  keywords: "拼字幕, 字幕拼图, 字幕生成, 字幕生成器, 字幕截图, 小红书引流, 小红书流量, 社交媒体运营, 名人语录, 电影台词, 马斯克说, 罗翔说, 乔布斯说, 余华说, 董宇辉说, 字幕图片, 字幕拼接, 内容引流, 增粉工具, 社交媒体曝光",
  ogType: "website",
  description: "拼字幕是一款极致便捷的在线拼图工具，专为社交媒体运营设计，帮助用户快速生成用于小红书、微博、视频号、抖音等平台引流的字幕拼图。通过简单操作，即可生成名人语录、电影台词等拼图内容，提升内容曝光率与粉丝增长。无论是打造个人品牌还是增加社交媒体流量，拼字幕都是您的理想选择。",
  ogDescription: "拼字幕是一款极致便捷的在线拼图工具，专为社交媒体运营设计，帮助用户快速生成用于小红书、微博、视频号、抖音等平台引流的字幕拼图。通过简单操作，即可生成名人语录、电影台词等拼图内容，提升内容曝光率与粉丝增长。无论是打造个人品牌还是增加社交媒体流量，拼字幕都是您的理想选择。",
  twitterCard: "summary_large_image",
  ogUrl: "https://labs.wowyou.cc",
  ogLocale: "zh",
  ogPublisher: '创图卡片',
  ogLogo: 'https://labs.wowyou.cc/logo.png',
  ogImage: 'https://labs.wowyou.cc/preview.png',
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

});


// 编辑器配置
const editorOptions = {
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
          ],
        },
        {
          background: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
          ],
        },
      ],
      [
        {
          font: [
            "roboto",
            "sans-serif",
            "serif",
            "monospace",
            "arial",
            "times",
            "courier",
            "微软雅黑",
            "宋体",
            "黑体",
            "楷体",
            "仿宋",
          ],
        },
      ],
      [{ size: ["small", false, "large", "huge"] }],
      ["clean"],
    ],
  },
  placeholder: "请输入要显示在图片底部的文字...",
  theme: "snow",
};

onMounted(async () => {
  isClient.value = true;

  // 从 localStorage 读取保存的内容
  const savedContent = localStorage.getItem('pinzimuEditorContent');
  if (savedContent) {
    editorContent.value = savedContent;
  }

  // 动态导入 Quill
  const Quill = (await import("quill")).default;
  // 导入样式
  await import("quill/dist/quill.snow.css");

  // 注册字体
  const Font = Quill.import("formats/font");
  // 定义可用字体
  Font.whitelist = [
    "roboto",
    "sans-serif",
    "serif",
    "monospace",
    "arial",
    "msyh",
    "simsun",
    "simhei",
    "kaiti",
    "fangsong",
  ];
  Quill.register(Font, true);

  // 初始化 Quill 编辑器
  quillInstance = new Quill(quillEditor.value, {
    ...editorOptions,
    modules: {
      ...editorOptions.modules,
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
              ],
            },
            {
              background: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
              ],
            },
          ],
          [{ font: Font.whitelist }],
          [{ size: ["small", false, "large", "huge"] }],
          ["clean"],
        ],
      },
    },
  });

  // 初始化完成后，如果有保存的内容则设置到编辑器
  if (savedContent && quillInstance) {
    quillInstance.clipboard.dangerouslyPasteHTML(savedContent);
  }

  // 监听内容变化
  quillInstance.on("text-change", () => {
    editorContent.value = quillEditor.value.querySelector(".ql-editor").innerHTML;
    // 保存到 localStorage
    localStorage.setItem('pinzimuEditorContent', editorContent.value);
  });
});

const uploadRef = ref(null);
const files = ref([]);
const base64Image = ref("");

const rules = [
  (value) => {
    return (
      !value ||
      !value.length ||
      value[0].size < 10000000 ||
      "Image size should be less than 10 MB!"
    );
  },
];

function upload() {
  uploadRef.value?.click();
}

async function uploadImg() {
  let file = files.value;
  if (file) {
    const url = URL.createObjectURL(file);
    base64Image.value = url;
  }
}

// 将 OVERLAY_HEIGHT 改为响应式变量
const overlayHeight = ref(60); // 默认值设为60

const textSections = computed(() => {
  if (!editorContent.value) return [];

  // 获取编辑器中的段落
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = editorContent.value;
  const paragraphs = tempDiv.getElementsByTagName("p");

  // 每两行组成一个部分
  const sections = [];
  let currentSection = [];

  Array.from(paragraphs).forEach((p, index) => {
    currentSection.push(p.outerHTML);
    if (currentSection.length === 2 || index === paragraphs.length - 1) {
      // 使用 div 包装并添加样式来确保换行
      sections.push(`
        <div style="width: 100%;">
          ${currentSection.join("")}
        </div>
      `);
      currentSection = [];
    }
  });

  return sections;
});

// 修改 getSectionStyle 函数使用 overlayHeight
function getSectionStyle(index) {
  if (index === 0) {
    return {
      height: "auto",
      zIndex: 999 - index,
    };
  }
  return {
    top: `${index * overlayHeight.value}px`, // 使用 overlayHeight.value
    height: "auto",
    zIndex: 999 - index,
    overflow: "hidden",
  };
}

// 计算图片样式
const imageStyle = computed(() => ({
  width: "100%", // 改为100%宽度
  height: "auto",
  objectFit: "contain",
  display: "block",
}));

// 添加聚焦方法
function focusEditor() {
  if (quillInstance) {
    quillInstance.focus();
  }
}

//生成图片
async function generateImage() {
  await nextTick();
  // 等待图片加载完成
  const images = zimu.value.getElementsByTagName('img');
  await Promise.all(Array.from(images).map(img => {
    return new Promise((resolve) => {
      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
      }
    });
  }));

  // 计算所有 image-section 的总高度
  const sections = zimu.value.getElementsByClassName('image-section');
  let maxBottom = 0;
  Array.from(sections).forEach(section => {
    const bottom = section.offsetTop + section.offsetHeight;
    maxBottom = Math.max(maxBottom, bottom);
  });

  html2canvas(zimu.value, {
    scale: 2,
    height: maxBottom,
    windowHeight: maxBottom,
    useCORS: true,
    logging: false,
    onclone: (clonedDoc) => {
      const clonedElement = clonedDoc.querySelector('.image-container');
      if (clonedElement) {
        clonedElement.style.height = `${maxBottom}px`;
      }
    }
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const blob = dataURItoBlob(imgData);

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "screenshot.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}
// 将 base64 转换为 Blob 对象的函数
const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};

// 可选：添加在组件卸载时清理的功能
onBeforeUnmount(() => {
  if (quillInstance) {
    quillInstance.off('text-change'); // 移除事件监听
  }
});
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  display: block;
  background-color: var(--v-theme-surface);
  border-radius: 12px;
  overflow: visible;
}

.image-section {
  position: absolute;
  left: 0;
  right: 0;
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  overflow: visible;
}

:deep(.v-img) {
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  width: 100% !important;
  height: auto !important;
  max-height: none !important; /* 添加这行确保图片不被限制高度 */
}

.responsive-image {
  max-width: 100%;
  height: auto;
  display: block; /* 添加这行消除图片底部间隙 */
}

.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  display: block;
  overflow: visible; /* 改为 visible 让文字可以正常显示 */
  text-align: center;
  width: 100%; /* 确保宽度100% */
}

.custom-file-input {
  width: 0;
  height: 0;
  visibility: hidden;
}

:deep(.ql-container) {
  min-height: 200px;
}

:deep(.ql-editor) {
  font-size: 16px;
}

:deep(.text-overlay p) {
  margin: 2px 0;
  line-height: 1.2;
  display: block;
}

/* 添加 Quill 字体大小样式支持 */
:deep(.text-overlay .ql-size-small) {
  font-size: 0.75em;
}

:deep(.text-overlay .ql-size-large) {
  font-size: 1.5em;
}

:deep(.text-overlay .ql-size-huge) {
  font-size: 2.5em;
}

/* 更新字体样式支持 */
:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="arial"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="arial"]::before) {
  content: "Arial";
  font-family: "Arial";
}

:deep(
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-label[data-value="arial-black"]::before
  ),
:deep(
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-item[data-value="arial-black"]::before
  ) {
  content: "Arial Black";
  font-family: "Arial Black";
}

:deep(
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-label[data-value="comic-sans"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="comic-sans"]::before
  ) {
  content: "Comic Sans MS";
  font-family: "Comic Sans MS";
}

:deep(
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-label[data-value="courier-new"]::before
  ),
:deep(
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-item[data-value="courier-new"]::before
  ) {
  content: "Courier New";
  font-family: "Courier New";
}

:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="georgia"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="georgia"]::before
  ) {
  content: "Georgia";
  font-family: "Georgia";
}

:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="helvetica"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="helvetica"]::before
  ) {
  content: "Helvetica";
  font-family: "Helvetica";
}

:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="impact"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="impact"]::before
  ) {
  content: "Impact";
  font-family: "Impact";
}

:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="tahoma"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="tahoma"]::before
  ) {
  content: "Tahoma";
  font-family: "Tahoma";
}

:deep(
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-label[data-value="times-new-roman"]::before
  ),
:deep(
    .ql-snow
      .ql-picker.ql-font
      .ql-picker-item[data-value="times-new-roman"]::before
  ) {
  content: "Times New Roman";
  font-family: "Times New Roman";
}

:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="trebuchet"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="trebuchet"]::before
  ) {
  content: "Trebuchet MS";
  font-family: "Trebuchet MS";
}

:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="verdana"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="verdana"]::before
  ) {
  content: "Verdana";
  font-family: "Verdana";
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="msyh"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="msyh"]::before) {
  content: "微软雅黑";
  font-family: "微软雅黑";
}

:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="simsun"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="simsun"]::before
  ) {
  content: "宋体";
  font-family: "宋体";
}

:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="simhei"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="simhei"]::before
  ) {
  content: "黑体";
  font-family: "黑体";
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="kaiti"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="kaiti"]::before) {
  content: "楷体";
  font-family: "楷体";
}

:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="fangsong"]::before
  ),
:deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="fangsong"]::before
  ) {
  content: "仿宋";
  font-family: "仿宋";
}

/* 更新文本覆盖层的字体样式 */
:deep(.text-overlay) {
  .ql-font-roboto {
    font-family: roboto, Helvetica, sans-serif !important;
  }
  .ql-font-sans-serif {
    font-family: Arial, Helvetica, sans-serif !important;
  }
  .ql-font-serif {
    font-family: "Times New Roman", Times, serif !important;
  }
  .ql-font-monospace {
    font-family: "Courier New", Courier, monospace !important;
  }
  .ql-font-arial {
    font-family: Arial, Helvetica, sans-serif !important;
  }
  .ql-font-times {
    font-family: "Times New Roman", Times, serif !important;
  }
  .ql-font-courier {
    font-family: "Courier New", Courier, monospace !important;
  }
  .ql-font-msyh {
    font-family: "微软雅黑", "Microsoft YaHei", sans-serif !important;
  }
  .ql-font-simsun {
    font-family: "宋体", SimSun, serif !important;
  }
  .ql-font-simhei {
    font-family: "黑体", SimHei, sans-serif !important;
  }
  .ql-font-kaiti {
    font-family: "楷体", KaiTi, serif !important;
  }
  .ql-font-fangsong {
    font-family: "仿宋", FangSong, serif !important;
  }
}

/* 更新编辑器预览样式 */
:deep(.ql-editor) {
  .ql-font-roboto {
    font-family: roboto, Helvetica, sans-serif !important;
  }
  .ql-font-sans-serif {
    font-family: Arial, Helvetica, sans-serif !important;
  }
  .ql-font-serif {
    font-family: "Times New Roman", Times, serif !important;
  }
  .ql-font-monospace {
    font-family: "Courier New", Courier, monospace !important;
  }
  .ql-font-arial {
    font-family: Arial, Helvetica, sans-serif !important;
  }
  .ql-font-times {
    font-family: "Times New Roman", Times, serif !important;
  }
  .ql-font-courier {
    font-family: "Courier New", Courier, monospace !important;
  }
  .ql-font-msyh {
    font-family: "微软雅黑", "Microsoft YaHei", sans-serif !important;
  }
  .ql-font-simsun {
    font-family: "宋体", SimSun, serif !important;
  }
  .ql-font-simhei {
    font-family: "黑体", SimHei, sans-serif !important;
  }
  .ql-font-kaiti {
    font-family: "楷体", KaiTi, serif !important;
  }
  .ql-font-fangsong {
    font-family: "仿宋", FangSong, serif !important;
  }
}

/* 添加容器样式 */
:deep(.v-container) {
  padding-top: 32px !important;
}

/* 添加媒体查询优化移动端显示 */
@media screen and (max-width: 600px) {
  .image-container {
    min-height: 300px; /* 移动端稍微降低最小高度 */
  }

  .text-overlay {
    padding: 5px;
  }

  :deep(.ql-editor) {
    font-size: 14px;
  }

  .editor-sheet {
    margin-top: 20px; /* 添加顶部边距 */
    margin-bottom: 20px;
  }

  /* 调整图片区域的层级 */
  .image-section {
    z-index: 1;
  }
}

/* 确保编辑器工具栏始终可见 */
:deep(.ql-toolbar) {
  position: sticky;
  top: 0;
  /* background-color: #fff; */
  z-index: 1001;
}

.editor-sheet {
  position: relative;
  z-index: 1000; /* 确保编辑器在最上层 */
}

/* 添加滑块样式 */
:deep(.v-slider) {
  margin-top: 20px;
}

/* 添加编辑器容器样式 */
:deep(.quill-container) {
  cursor: text;
}

/* 确保编辑器区域可以接收点击事件 */
:deep(.ql-container) {
  min-height: 200px;
  background-color: var(--v-theme-surface);
}

:deep(.ql-editor) {
  min-height: 200px;
  font-size: 16px;
  padding: 12px 15px;
}
</style>
