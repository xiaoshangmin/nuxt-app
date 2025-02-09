<template>
  <v-container>
    <v-row class="justify-center">
      <!-- 左侧图片上传区域 -->
      <v-col cols="6" style="min-width: 100px">
        <div
          class="d-flex justify-center cursor-pointer rounded-xl position-relative"
          @click="upload"
        >
          <!-- 图片容器 -->
          <div class="image-container">
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
                  max-width="600"
                  :style="imageStyle"
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
                  max-width="600"
                  :style="imageStyle"
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

      <!-- 右侧富文本编辑区域 -->
      <v-col cols="6" style="min-width: 400px">
        <v-sheet rounded="lg" class="pa-4">
          <div v-if="isClient">
            <div ref="quillEditor"></div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const isClient = ref(false);
const editorContent = ref("");
const quillEditor = ref(null);
let quillInstance = null;

// 编辑器配置
const editorOptions = {
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ 
        color: [
          "#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", 
          "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", 
          "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", 
          "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", 
          "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", 
          "#663d00", "#666600", "#003700", "#002966", "#3d1466"
        ] 
      }, { 
        background: [
          "#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", 
          "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", 
          "#cce0f5", "#ebd6ff"
        ] 
      }],
      [{ 
        font: [
          false,
          'sans-serif',
          'serif',
          'monospace',
          'arial',
          'times',
          'courier',
          '微软雅黑',
          '宋体',
          '黑体',
          '楷体',
          '仿宋'
        ] 
      }],
      [{ size: ["small", false, "large", "huge"] }],
      ["clean"],
    ],
  },
  placeholder: "请输入要显示在图片底部的文字...",
  theme: "snow",
};

onMounted(async () => {
  isClient.value = true;

  // 动态导入 Quill
  const Quill = (await import("quill")).default;
  // 导入样式
  await import("quill/dist/quill.snow.css");

  // 注册字体
  const Font = Quill.import('formats/font');
  // 定义可用字体
  Font.whitelist = [
    'sans-serif',
    'serif',
    'monospace',
    'arial',
    'times',
    'courier',
    'msyh',
    'simsun',
    'simhei',
    'kaiti',
    'fangsong'
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
          [{ 
            color: [
              "#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", 
              "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", 
              "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", 
              "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", 
              "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", 
              "#663d00", "#666600", "#003700", "#002966", "#3d1466"
            ] 
          }, { 
            background: [
              "#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", 
              "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", 
              "#cce0f5", "#ebd6ff"
            ] 
          }],
          [{ font: Font.whitelist }],
          [{ size: ["small", false, "large", "huge"] }],
          ["clean"],
        ]
      }
    }
  });

  // 监听内容变化
  quillInstance.on("text-change", () => {
    editorContent.value =
      quillEditor.value.querySelector(".ql-editor").innerHTML;
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
      value[0].size < 2000000 ||
      "Image size should be less than 2 MB!"
    );
  },
];

function upload() {
  uploadRef.value?.click();
}

async function uploadImg() {
  let file = files.value;
  const url = URL.createObjectURL(file);
  base64Image.value = url;
}

const imageHeight = 300; // 每个图片区域的高度
const OVERLAY_HEIGHT = 60; // 文字覆盖层高度，用于显示两行文字

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

// 计算容器样式
const containerStyle = computed(() => {
  const firstImageHeight = imageHeight;
  const remainingHeight = (textSections.value.length - 1) * OVERLAY_HEIGHT;
  const totalHeight =
    textSections.value.length > 0 ? firstImageHeight + remainingHeight : 200;

  return {
    minHeight: `${totalHeight}px`,
  };
});

// 计算图片区域样式
function getSectionStyle(index) {
  if (index === 0) {
    // 第一张图片完整显示
    return {
    //   top: "-100%",
      height: "auto", // `${imageHeight}px`,
      zIndex: 999 - index, // 第一张图片z-index最大，后面依次递减
    };
  }
  // 后续图片只显示底部文字区域的部分
  return {
    top: `${index * OVERLAY_HEIGHT}px`,
    height: "auto", // `${imageHeight}px`, // 恢复完整高度，但会被前面的图片覆盖
    zIndex: 999 - index, // z-index随index递减
    overflow: "hidden",
  };
}

// 计算图片样式
const imageStyle = computed(() => ({
  width: "400px", // 固定宽度为容器宽度
  height: "auto", // 高度自动，保持原始比例
  objectFit: "fill", // 使用fill确保宽度填充
  display: "block", // 确保图片正确显示
}));
</script>

<style scoped>
.image-container {
  position: relative;
  width: 400px;
  min-height: 100px;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
}

.image-section {
  position: absolute;
  left: 0;
  right: 0;
  display: block;
  margin: 0;
  padding: 0;
  width: 400px;
}

:deep(.v-img) {
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  width: 400px !important;
  height: auto !important;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* color: white; */
  /* padding: 10px; */
  height: auto;
  /* min-height: 80px; */
  display: block;
  overflow: hidden;
  text-align: center;
  /* width: 400px; */
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
  content: 'Arial';
  font-family: 'Arial';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="arial-black"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="arial-black"]::before) {
  content: 'Arial Black';
  font-family: 'Arial Black';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="comic-sans"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="comic-sans"]::before) {
  content: 'Comic Sans MS';
  font-family: 'Comic Sans MS';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="courier-new"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="courier-new"]::before) {
  content: 'Courier New';
  font-family: 'Courier New';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="georgia"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="georgia"]::before) {
  content: 'Georgia';
  font-family: 'Georgia';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="helvetica"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="helvetica"]::before) {
  content: 'Helvetica';
  font-family: 'Helvetica';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="impact"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="impact"]::before) {
  content: 'Impact';
  font-family: 'Impact';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="tahoma"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="tahoma"]::before) {
  content: 'Tahoma';
  font-family: 'Tahoma';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="times-new-roman"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="times-new-roman"]::before) {
  content: 'Times New Roman';
  font-family: 'Times New Roman';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="trebuchet"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="trebuchet"]::before) {
  content: 'Trebuchet MS';
  font-family: 'Trebuchet MS';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="verdana"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="verdana"]::before) {
  content: 'Verdana';
  font-family: 'Verdana';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="msyh"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="msyh"]::before) {
  content: '微软雅黑';
  font-family: '微软雅黑';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="simsun"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="simsun"]::before) {
  content: '宋体';
  font-family: '宋体';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="simhei"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="simhei"]::before) {
  content: '黑体';
  font-family: '黑体';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="kaiti"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="kaiti"]::before) {
  content: '楷体';
  font-family: '楷体';
}

:deep(.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="fangsong"]::before),
:deep(.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="fangsong"]::before) {
  content: '仿宋';
  font-family: '仿宋';
}

/* 更新文本覆盖层的字体样式 */
:deep(.text-overlay) {
  .ql-font-sans-serif { font-family: Arial, Helvetica, sans-serif !important; }
  .ql-font-serif { font-family: "Times New Roman", Times, serif !important; }
  .ql-font-monospace { font-family: "Courier New", Courier, monospace !important; }
  .ql-font-arial { font-family: Arial, Helvetica, sans-serif !important; }
  .ql-font-times { font-family: "Times New Roman", Times, serif !important; }
  .ql-font-courier { font-family: "Courier New", Courier, monospace !important; }
  .ql-font-msyh { font-family: "微软雅黑", "Microsoft YaHei", sans-serif !important; }
  .ql-font-simsun { font-family: "宋体", SimSun, serif !important; }
  .ql-font-simhei { font-family: "黑体", SimHei, sans-serif !important; }
  .ql-font-kaiti { font-family: "楷体", KaiTi, serif !important; }
  .ql-font-fangsong { font-family: "仿宋", FangSong, serif !important; }
}

/* 更新编辑器预览样式 */
:deep(.ql-editor) {
  .ql-font-sans-serif { font-family: Arial, Helvetica, sans-serif !important; }
  .ql-font-serif { font-family: "Times New Roman", Times, serif !important; }
  .ql-font-monospace { font-family: "Courier New", Courier, monospace !important; }
  .ql-font-arial { font-family: Arial, Helvetica, sans-serif !important; }
  .ql-font-times { font-family: "Times New Roman", Times, serif !important; }
  .ql-font-courier { font-family: "Courier New", Courier, monospace !important; }
  .ql-font-msyh { font-family: "微软雅黑", "Microsoft YaHei", sans-serif !important; }
  .ql-font-simsun { font-family: "宋体", SimSun, serif !important; }
  .ql-font-simhei { font-family: "黑体", SimHei, sans-serif !important; }
  .ql-font-kaiti { font-family: "楷体", KaiTi, serif !important; }
  .ql-font-fangsong { font-family: "仿宋", FangSong, serif !important; }
}

/* 添加容器样式 */
:deep(.v-container) {
  padding-top: 32px !important;
}
</style>
