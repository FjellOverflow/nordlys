import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import generateCodeHeaders from './src/helpers/generateCodeHeaders'
import readingTime from './src/helpers/readingTime'

export default defineConfig({
  site: 'https://nordlys.fjelloverflow.dev',
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark'
      },
      wrap: true,
      transformers: [generateCodeHeaders]
    },
    remarkPlugins: [readingTime]
  }
})
