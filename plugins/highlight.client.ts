// plugins/highlight.client.ts
export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.vueApp.directive('highlight', {
      mounted(el) {
        import('highlight.js').then(hljs => {
          const blocks = el.querySelectorAll('pre code')
          blocks.forEach((block: any) => {
            hljs.default.highlightElement(block)
          })
        })
      },
      getSSRProps() {
        return {}
      }
    })
   
})