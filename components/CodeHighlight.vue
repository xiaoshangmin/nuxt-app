<template>
    <div>
      <select v-model="detectedLanguage">
        <option value="">自动检测</option>
        <option v-for="lang in languages" :key="lang" :value="lang">
          {{ lang }}
        </option>
      </select>
      <pre><code v-html="highlightedCode"></code></pre>
    </div>
  </template>
  
  <script setup lang="ts">
  import { watch } from 'vue';
  import { useHighlight } from '~/composables/useHighlight';
  import 'highlight.js/styles/default.css';
  
  const props = defineProps({
    code: {
      type: String,
      required: true
    },
    initialLanguage: {
      type: String,
      default: ''
    }
  });
  
  const { highlightedCode, detectedLanguage } = useHighlight(props.code, props.initialLanguage);
  
  const languages = [
    'javascript', 'python', 'java', 'cpp', 'php', 'ruby', 'go', 'rust', 
    'swift', 'kotlin', 'typescript', 'scala', 'html', 'css', 'xml', 'json'
  ];
  
  watch(() => props.code, (newCode) => {
    const { highlightedCode: newHighlightedCode, detectedLanguage: newDetectedLanguage } = useHighlight(newCode, detectedLanguage.value);
    highlightedCode.value = newHighlightedCode.value;
    detectedLanguage.value = newDetectedLanguage.value;
  });
  </script>