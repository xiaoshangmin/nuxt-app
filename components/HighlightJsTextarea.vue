<!-- HighlightJsTextarea.vue -->
<template>
  <div class="editor-container">
    <div class="editor-header">
      <div class="editor-controls">
        <span class="control red"></span>
        <span class="control yellow"></span>
        <span class="control green"></span>
      </div>
      <div class="editor-title">Code Editor</div>
    </div>
    <div class="code-editor" ref="editorContainer">
      <textarea v-model="code" @input="updateHighlight" class="code-input" ref="codeInput"
        spellcheck="false"></textarea>
      <pre class="code-output" ref="codeOutput"><code v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.min.css' // 使用默认主题

hljs.registerLanguage('javascript', javascript)

const code = ref('')
const highlightedCode = ref('')
const codeInput = ref(null)
const codeOutput = ref(null)
const editorContainer = ref(null)

const updateHighlight = () => {
  const highlighted = hljs.highlight(code.value, { language: 'javascript' })
  highlightedCode.value = highlighted.value
  adjustHeight()
}

const adjustHeight = () => {
  if (codeInput.value && codeOutput.value && editorContainer.value) {
    codeInput.value.style.height = 'auto'
    codeOutput.value.style.height = 'auto'
    const scrollHeight = codeInput.value.scrollHeight
    codeInput.value.style.height = `${scrollHeight}px`
    codeOutput.value.style.height = `${scrollHeight}px`
    editorContainer.value.style.height = `${scrollHeight}px`
  }
}

onMounted(() => {
  updateHighlight()
})

watch(code, adjustHeight)
</script>

<style scoped>
.editor-container {
  width: 600px;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.editor-header {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(240, 240, 240, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.editor-controls {
  display: flex;
  gap: 0.5rem;
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
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.code-editor {
  position: relative;
  width: 100%;
  /* min-height: 300px; */
  transition: height 0.2s;
}

.code-input,
.code-output {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1rem;
  border: none;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: auto;
}

.code-input {
  color: transparent;
  caret-color: #333;
  background: transparent;
  resize: none;
  z-index: 1;
  outline: none; /* 移除默认的聚焦轮廓 */
}

.code-input:focus {
  box-shadow: inset 0 0 0 2px rgba(0, 120, 212, 0.1);
}

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