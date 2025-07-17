import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  shortcuts: {
    'ele-empty': 'empty:before:content-[\'-\']',
    'ele-hover-bg': 'hover:bg-[--el-bg-color-page] transition duration-200 cursor-pointer',
    'flex-center': 'flex justify-center items-center',
    'popper-init-theme': '!px-10 !py-5 !text-12 break-all',
    'tip-icon': 'text-[#b5b8be] size-1.1em cursor-pointer ml-5',
    'b': 'b-1 b-solid b-red',
    'rename-wrapper': 'min-w-10 max-w-350 h-25 relative inline-block items-center b-(b-1 b-dashed #b5b8be)',
    'rename-input': 'inline-block b-none p-0 m-0 truncate text-16/30 absolute inset-0 text-[--el-text-color-primary] [&:focus]:outline-none',
    'rename-span': 'inline-block max-w-350 text-16 invisible',
  },
  theme: {
    breakpoints: {
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1920px',
    },
  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  safelist: [
    'i-icon-park-outline:text-recognition',
    'i-lucide:scan-text',
    'i-bi:123',
    'i-formkit:datetime',
    'i-carbon:radio-button-checked',
    'i-mdi:checkbox-multiple-outline',
    'i-lucide:square-check',
    'i-lucide:list-checks',
    'i-lucide:user',
    'i-lucide:users',
    'i-hugeicons:hierarchy-circle-01',
    'i-streamline:hierarchy-2',
    'i-stash:section-divider',
    'i-mdi:tab-minus',
  ],
})
