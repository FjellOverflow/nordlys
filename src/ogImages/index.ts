import { resolveColorScheme } from '@/colorSchemes'
import post from '@/ogImages/post'
import site from '@/ogImages/site'
import config from '@/theme.config'
import type { RgbColor } from '@/types'
import fs from 'fs'
import satori, { type SatoriOptions } from 'satori'

const loadFont = async (weight: string) => {
  try {
    return fs.readFileSync(
      `src/assets/fonts/ibm-plex-sans-latin-${weight}-normal.woff`
    )
  } catch (cause) {
    throw new Error(
      `Failed to load font 'ibm-plex-sans-latin-${weight}-normal.woff'. Have you invoked the build from repository root?`,
      { cause }
    )
  }
}

const satoriOptions: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: 'IBM Plex Sans',
      data: await loadFont('400'),
      weight: 400,
      style: 'normal'
    },
    {
      name: 'IBM Plex Sans',
      data: await loadFont('600'),
      weight: 600,
      style: 'normal'
    },
    {
      name: 'IBM Plex Sans',
      data: await loadFont('700'),
      weight: 700,
      style: 'normal'
    }
  ]
}

const { mode, colorScheme } = config

const { accent, accentBg } = resolveColorScheme(colorScheme)[mode]

const toTailwindColor = (color: RgbColor) => `[rgb(${color.join(',')})]`

const siteTemplate = site(toTailwindColor(accent), toTailwindColor(accentBg))
const postTemplate = post(toTailwindColor(accent), toTailwindColor(accentBg))

export default {
  site: (...args: Parameters<typeof siteTemplate>) =>
    satori(siteTemplate(...args), satoriOptions),
  post: (...args: Parameters<typeof postTemplate>) =>
    satori(postTemplate(...args), satoriOptions)
}
