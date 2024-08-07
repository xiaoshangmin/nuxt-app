<!-- HighlightJsTextarea.vue -->
<template>
    <div class="code-editor">
      <textarea
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
  import 'highlight.js/styles/default.css'
  
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
    width: 100%;
    height: 300px;
  }
  
  .code-input,
  .code-output {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: monospace;
    font-size: 14px;
    line-height: 1.5;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: auto;
  }
  
  .code-input {
    color: transparent;
    background: transparent;
    caret-color: #000;
    resize: none;
    z-index: 1;
  }
  
  .code-output {
    background-color: #000;
    color: #fff;
    pointer-events: none;
    z-index: 0;
  }
  
  @media (prefers-color-scheme: dark) {
    .code-input {
      caret-color: #fff;
    }
  }
  </style>