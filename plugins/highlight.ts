// plugins/highlight.ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    if (!nuxtApp.$highlightCode) { 
        nuxtApp.provide('highlightCode', async (el: HTMLElement) => { 
            if (import.meta.client) { 
                const hljs = await import('highlight.js')
                const blocks = el.querySelectorAll('pre code')
                blocks.forEach((block) => {
                    hljs.default.highlightElement(block as HTMLElement)
                })
            }
        })
    }
})