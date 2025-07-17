// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxt/eslint'],
  ssr: false,
  pages: {
    pattern: ['**/*.vue', '!**/_*'],
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  features: {
    inlineStyles: false, // For UnoCSS
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
