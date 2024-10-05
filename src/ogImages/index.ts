import extractColorScheme from '@/ogImages/extractColorScheme'
import post from '@/ogImages/post'
import site from '@/ogImages/site'
import config from '@/theme.config'
import satori, { type SatoriOptions } from 'satori'

const fetchFont = async (weight: string) =>
  (
    await fetch(
      `https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-sans@latest/latin-${weight}-normal.ttf`
    )
  ).arrayBuffer()

const satoriOptions: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: 'IBM Plex Sans',
      data: await fetchFont('400'),
      weight: 400,
      style: 'normal'
    },
    {
      name: 'IBM Plex Sans',
      data: await fetchFont('600'),
      weight: 600,
      style: 'normal'
    },
    {
      name: 'IBM Plex Sans',
      data: await fetchFont('700'),
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
