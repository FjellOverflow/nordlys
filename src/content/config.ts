import config from '@/theme.config'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().default(config.author),
      description: z.string(),
      publishedDate: z.date(),
      draft: z.boolean().optional().default(false),
      canonicalURL: z.string().optional(),
      openGraphImage: image().or(z.string()).optional(),
      tags: z.array(z.string()).default([]),
      showToC: z.boolean().optional().default(true),
      previewImage: image().or(z.string()).optional()
    })
})

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string().optional(),
      startDate: z.date(),
      endDate: z.date().optional().nullable(),
      tags: z.array(z.string()).default([]),
      previewImage: image().or(z.string()).optional()
    })
})

export const collections = { posts, projects }
