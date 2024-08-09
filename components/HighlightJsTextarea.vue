<!-- HighlightJsTextarea.vue -->
<template>
  <div class="editor-container" ref="draggable" :style="styleObject">
    <div class="editor-header">
      <div class="editor-controls">
        <span class="control red"></span>
        <span class="control yellow"></span>
        <span class="control green"></span>
      </div>
      <div class="editor-title">Code Editor</div>
    </div>
    <div class="code-editor" ref="editorContainer">
      <textarea v-model="code" @input="updateHighlight" class="code-input" ref="codeInput" spellcheck="false"
        autocomplete="false" autocapitalize="false"></textarea>
      <pre class="code-output" ref="codeOutput"><code v-html="highlightedCode" ></code></pre>
    </div>
  </div>
  <div class="d-flex mt-5 mb-16 flex-row align-center justify-center ga-4">
    <v-btn @click="generateImage" class="text-none">
      {{ $t("Download Image") }}
    </v-btn>
    <v-tooltip text="可直接粘贴在聊天框" v-if="!isMobile">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" @click="copyImage" class="text-none">
          {{ $t("Copy Image") }}</v-btn>
      </template>
    </v-tooltip>
  </div>
</template>

<script setup>

import { codeToHtml } from 'shiki'

import hljs from 'highlight.js/lib/common'
// import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.min.css' // 使用默认主题

// hljs.registerLanguage('javascript', javascript)
const emit = defineEmits(["generateImage", "copyImage"]);

const code = ref('')
const language = ref("")
const highlightedCode = ref('')
const codeInput = ref(null)
const codeOutput = ref(null)
const editorContainer = ref(null)


const props = defineProps({
  isMobile: { type: Boolean, default: false },
  draggable: { type: Object },
  styleObject: { type: Object },
});

const updateHighlight = () => {
  if (language.value) {
    const highlighted = hljs.highlight(code.value, { "language": language.value })
    highlightedCode.value = highlighted.value
  } else {
    const highlighted = hljs.highlightAuto(code.value)
    language.value = highlighted.language
    highlightedCode.value = highlighted.value
  }
  adjustHeight()
}

const adjustHeight = () => {
  if (codeInput.value && codeOutput.value && editorContainer.value) {
    codeInput.value.style.height = 'auto'
    codeOutput.value.style.height = 'auto'
    void codeInput.value.offsetHeight
    const scrollHeight = codeInput.value.scrollHeight
    codeInput.value.style.height = `${scrollHeight}px`
    codeOutput.value.style.height = `${scrollHeight}px`
    editorContainer.value.style.height = `${scrollHeight}px`
  }
}

function handleTabKey(event) {
  if (event.keyCode === 9) { // 检查是否是 tab 键
    event.preventDefault(); // 阻止默认行为
    // 这里可以添加你希望 tab 键执行的操作，例如插入空格
    // 例如：插入两个空格
    const start = codeInput.value.selectionStart;
    const end = codeInput.value.selectionEnd;

    // 假设我们简单地将光标位置的文本替换为两个空格
    const value = codeInput.value.value;
    codeInput.value.value =
      value.substring(0, start) + '  ' +
      value.substring(end);
    // 移动光标到两个空格之后
    codeInput.value.selectionStart =
      codeInput.value.selectionEnd = start + 2;
  }
}

onMounted(() => {
  updateHighlight()
  document.addEventListener('keydown', handleTabKey);
})
onUnmounted(() => {
  // 移除键盘事件监听器
  document.removeEventListener('keydown', handleTabKey);
});

function generateImage() {
  emit("generateImage")
}
function copyImage() {
  emit("copyImage")
}


watch(code, () => {
  updateHighlight()
}, { deep: true })

watch(() => props.styleObject, (newVal, oldVal) => {
  
    console.log('styleObject 对象变化了');
    setTimeout(()=>{

      updateHighlight()
    },100)
 
}, { deep: true })

</script>

<style scoped>
@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 145deg;
}

@property --colorA {
  syntax: "<color>";
  inherits: false;
  initial-value: rgb(5, 174, 157);
}

@property --colorB {
  syntax: "<color>";
  inherits: false;
  initial-value: rgb(17, 26, 35);
}


.editor-container {

  background-image: linear-gradient(var(--angle), var(--colorA), var(--colorB));
  transition: padding 0.5s, --angle 1s, --colorA 1s, --colorB 1s, opacity .5s;
  font-family: inherit;
  box-sizing: border-box;
  --base-font-size: 1.1rem;

  margin: 1rem auto;
  /* border-radius: 8px; */
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  /* background: rgba(255, 255, 255, 0.2); */
  backdrop-filter: blur(10px);
}

.editor-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  background: rgba(240, 240, 240, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}

.editor-controls {
  display: flex;
  gap: 0.5rem;
  position: absolute;
  padding: 0 16px;
  left: 0;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red {
  background-color: #ff5f56;
}

.yellow {
  background-color: #ffbd2e;
}

.green {
  background-color: #27c93f;
}

.editor-title {
  flex-grow: 1;
  text-align: center;
  /* font-size: 14px; */
  font-size: inherit;
  font-weight: 500;
  color: #333;
}

.code-editor {
  position: relative;
  width: 100%;
  /* min-height: 300px; */
  /* transition: height 0.2s; */
}

.code-input,
.code-output {
  tab-size: 2;
  transition: font-size .5s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100px;
  margin: 0;
  padding: 1rem;
  border: none;
  font-family: 'Roboto';
  /* font-size: calc(var(--base-font-size)); */
  font-size: inherit;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  background-color: rgba(209, 166, 66, .1);
  letter-spacing: 1.5px;
}

.code-input {
  color: transparent;
  caret-color: #333;
  background: transparent;
  resize: none;
  z-index: 1;
  outline: none;
  text-size-adjust: none;
  font-variant-ligatures: none;
}

/* .code-input:focus {
  box-shadow: inset 0 0 0 2px rgba(0, 120, 212, 0.1);
} */

.code-output {
  pointer-events: none;
  z-index: 0;
  background: rgba(255, 255, 255, 0.8);
}

.code-output code {
  font-family: inherit;
}

/* 自定义滚动条 */
/* .code-input::-webkit-scrollbar,
.code-output::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.code-input::-webkit-scrollbar-thumb,
.code-output::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.code-input::-webkit-scrollbar-track,
.code-output::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.05);
} */
</style>