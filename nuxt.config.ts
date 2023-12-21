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
    "nuxt-seo-kit",
    "@nuxtjs/fontaine",
    "@nuxtjs/supabase"
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],
})