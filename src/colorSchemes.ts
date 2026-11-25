import type {
  ColorScheme,
  ColorSchemeColors,
  ColorSchemeDefinition
} from '@/types'

export const colorSchemes = {
  'scheme-mono': {
    light: { accent: [0, 0, 0], accentBg: [255, 255, 255] },
    dark: { accent: [255, 255, 255], accentBg: [0, 0, 0] }
  },
  'scheme-nord': {
    light: { accent: [94, 129, 172], accentBg: [242, 244, 248] },
    dark: { accent: [136, 192, 208], accentBg: [36, 41, 51] }
  },
  'scheme-aurora': {
    light: { accent: [0, 183, 86], accentBg: [242, 244, 248] },
    dark: { accent: [0, 253, 119], accentBg: [35, 39, 48] }
  }
} satisfies Record<string, ColorSchemeDefinition>

export const resolveColorScheme = (
  colorScheme: ColorScheme | ColorSchemeDefinition
): ColorSchemeDefinition =>
  typeof colorScheme === 'string' ? colorSchemes[colorScheme] : colorScheme

const toCssVariables = ({ accent, accentBg }: ColorSchemeColors) =>
  `--accent: ${accent.join(', ')}; --accent-bg: ${accentBg.join(', ')};`

export const toColorSchemeCss = ({ light, dark }: ColorSchemeDefinition) =>
  `:root { ${toCssVariables(light)} } :root[data-mode='dark'] { ${toCssVariables(dark)} }`
