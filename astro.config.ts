import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import codeHeadersPlugin from './src/plugins/codeHeadersPlugin'
import readingTimePlugin from './src/plugins/readingTimePlugin'

export default defineConfig({
  site: 'https://nordlys.fjelloverflow.dev',
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-black'
      },
      wrap: true,
      transformers: [codeHeadersPlugin]
    },
    remarkPlugins: [readingTimePlugin]
  }
})
