import writeRoutesToFile from './app/utils/writeRoutesToFile'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],
  ssr: false,
  pages: {
    pattern: ['**/*.vue', '!**/_*'],
  },
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
  },
  css: [
    '~/assets/styles/global.scss',
  ],
  features: {
    inlineStyles: false,
  },
  experimental: {
    extraPageMetaExtractionKeys: ['title', 'order'],
  },
  compatibilityDate: '2025-07-15',
  hooks: {
    'pages:resolved': async (pages) => {
      const routes = pages.map(
        ({ name, path, children, meta }) => ({ name, path, children, meta }),
      )
      writeRoutesToFile(routes)
    },
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
