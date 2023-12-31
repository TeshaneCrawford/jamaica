import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    presetTagify,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    shortcuts: [],
    theme: {
        colors: {}
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                sans: 'Montserrat',
                serif: 'Overpass',
                mono: 'Averia Serif Libre',
            },
        }),
        presetTagify(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})