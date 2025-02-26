import extractColorScheme from '@/ogImages/extractColorScheme'
import post from '@/ogImages/post'
import site from '@/ogImages/site'
import config from '@/theme.config'
import fs from 'fs'
import satori, { type SatoriOptions } from 'satori'

const loadFont = async (weight: string) =>
  fs.readFileSync(
    `node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-${weight}-normal.woff`
  )

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

const { accent, bg } = extractColorScheme(colorScheme)[mode]

const siteTemplate = site(accent, bg)
const postTemplate = post(accent, bg)

export default {
  site: (...args: Parameters<typeof siteTemplate>) =>
    satori(siteTemplate(...args), satoriOptions),
  post: (...args: Parameters<typeof postTemplate>) =>
    satori(postTemplate(...args), satoriOptions)
}
