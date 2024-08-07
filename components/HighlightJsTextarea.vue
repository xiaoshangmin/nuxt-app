<!-- HighlightJsTextarea.vue -->
<template>
    <div class="code-editor">
      <textarea autocomplete="off" spellcheck="false" autocapitalize="off" data-enable-grammarly="false"
        v-model="code"
        @input="updateHighlight"
        class="code-input"
      ></textarea>
      <pre
        class="code-output"
        v-html="highlightedCode"
      ></pre>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import hljs from 'highlight.js/lib/core'
  import javascript from 'highlight.js/lib/languages/javascript'
  import 'highlight.js/styles/atom-one-dark.css' // 使用 atom-one-dark 主题
  
  hljs.registerLanguage('javascript', javascript)
  
  const code = ref('')
  const highlightedCode = ref('')
  
  const updateHighlight = () => {
    const highlighted = hljs.highlight(code.value, { language: 'javascript' })
    highlightedCode.value = highlighted.value
  }
  
  onMounted(() => {
    updateHighlight()
  })
  </script>
  
  <style scoped>
  .code-editor {
    position: relative;
    width: 600px;
    height: auto;
    min-height: 300px; /* 设置最小高度 */
    background-color: #2b2b2b; /* 背景颜色更接近图片的样式 */
    border-radius: 8px; /* 圆角效果 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 阴影效果 */
    overflow: hidden;
  }
  
  .code-input,
  .code-output {
    width: 600px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 15px; /* 调整 padding 以符合图片样式 */
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; /* 字体更接近图片 */
    font-size: 14px;
    line-height: 1.5;
    white-space: pre-wrap; /* 自动换行 */
    word-wrap: break-word; /* 自动换行 */
    resize: none; overflow-y: hidden;
  }
  
  .code-input {
    color: transparent;
    background: transparent;
    caret-color: #ffffff; /* 光标颜色 */
    z-index: 1;
    resize: none;
    border: none; /* 去掉边框 */
    outline: none; /* 去掉聚焦时的边框 */
    overflow: hidden; /* 隐藏滚动条 */
    height: auto; /* 高度自动 */
    min-height: 300px; /* 设置最小高度 */
  }
  
  .code-output {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; /* 字体更接近图片 */
    background-color: #2b2b2b; /* 背景颜色与容器一致 */
    color: #ffffff; /* 字体颜色 */
    z-index: 0;
    pointer-events: none;
    height: auto; /* 高度自动 */
    min-height: 300px; /* 设置最小高度 */
  }
  
  @media (prefers-color-scheme: dark) {
    .code-input {
      caret-color: #ffffff; /* 光标颜色 */
    }
  }
  </style>
  