// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxt/eslint'],
  ssr: false,
  pages: {
    pattern: ['**/*.vue', '!**/_*'],
  },
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  features: {
    inlineStyles: false, // For UnoCSS
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
