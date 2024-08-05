// plugins/highlight.server.js
import hljs from 'highlight.js/lib/common';

export default defineNuxtPlugin(() => {
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