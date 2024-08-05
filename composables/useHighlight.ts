// composables/useHighlight.ts
import { ref, onMounted, watch } from 'vue';
import hljs from 'highlight.js/lib/common';

export function useHighlight(code: string, language: string = '') {
  const highlightedCode = ref('');
  const detectedLanguage = ref(language);

  const highlight = () => {
    if (detectedLanguage.value && hljs.getLanguage(detectedLanguage.value)) {
      highlightedCode.value = hljs.highlight(code, { language: detectedLanguage.value }).value;
    } else {
      const result = hljs.highlightAuto(code);
      highlightedCode.value = result.value;
      detectedLanguage.value = result.language || '';
    }
  };

  onMounted(() => {
    highlight();
  });

  watch(() => code, () => {
    highlight();
  });

  return {
    highlightedCode,
    detectedLanguage,
  };
}