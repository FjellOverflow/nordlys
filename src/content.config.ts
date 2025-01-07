import config from '@/theme.config'
import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().default(config.author),
      description: z.string(),
      publishedDate: z.date(),
      draft: z.boolean().optional().default(false),
      canonicalURL: z.string().optional(),
      openGraphImage: image().optional(),
      tags: z.array(z.string()).default([]),
      showToC: z.boolean().optional().default(true),
      previewImage: image().optional()
    })
})

const projects = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './content/projects'
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string().optional(),
      startDate: z.date(),
      endDate: z.date().optional().nullable(),
      tags: z.array(z.string()).default([]),
      previewImage: image().optional()
    })
})

export const collections = { posts, projects }
