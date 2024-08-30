// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          "name": "viewport", "content": "width=device-width, initial-scale=1, maximum-scale=5, minimal-ui, shrink-to-fit=no"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [ 
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: "https://hm.baidu.com/hm.js?33689b74c190f968430ea0b99c4497ac",
          async: true
        },
      ],
    }
  },
  nitro: {
    compressPublicAssets: true, // 启动压缩
  },
  build: {
    transpile: ['vuetify'],
    analyze: {
      filename: "stats.html",
    },
  },
  modules: [
    '@nuxtjs/i18n',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'zh-CN',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        file: 'zh-CN.json',
      }
    ],
    lazy: true,
    langDir: 'internationalization',
    defaultLocale: 'zh-CN',
  },
  components: true,
  compatibilityDate: '2024-04-03',
  devServer: {
    host: "0.0.0.0"
  },
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
      CHATWOOT_WEBSITE_TOKEN: process.env.CHATWOOT_WEBSITE_TOKEN,
      UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID
    }
  },
  devtools: { enabled: false },
  sourcemap: false
})
