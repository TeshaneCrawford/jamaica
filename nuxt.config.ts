import { pwa } from './config/pwa'
import { appDescription } from './shared/constants/metaData'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
    strict: true,
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@unocss/nuxt",
    "@vite-pwa/nuxt",
    "@nuxtjs/fontaine",
    // "@nuxtjs/supabase"
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'Montserrat': [400, 500, 600, 700, 800],
      'Overpass': [400, 600, 700],
      'Averia Serif Libre': [400, 700],
    },
  },
  
  $development: {
    runtimeConfig: {
      public: {
        website: {
          url: 'http://localhost:3000'
        }
      }
    }
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/main.css',
    '~/assets/css/variables.css',
    '~/assets/css/fonts.css',
  ],

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,
})