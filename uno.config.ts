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
    'flex-center': 'flex justify-center items-center',
    'b': 'b-1 b-solid b-red',
  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
