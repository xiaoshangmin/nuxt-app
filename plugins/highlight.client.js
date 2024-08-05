// plugins/highlight.client.js
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/default.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('highlight', {
    mounted(el, binding) { 
      highlightElement(el, binding.value);
    },
    updated(el, binding) {
      highlightElement(el, binding.value);
    }
  });

  function highlightElement(el, lang) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      if (lang) {
        block.className = `language-${lang}`;
      }
      hljs.highlightElement(block);
    });
  }

  return {
    provide: {
      highlight: (code, language) => {
        if (language && hljs.getLanguage(language)) {
          return hljs.highlight(code, { language }).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
      },
      detectLanguage: (code) => {
        return hljs.highlightAuto(code).language;
      }
    }
  };
});