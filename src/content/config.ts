import config from '@/theme.config'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      author: z.string().default(config.author),
      description: z.string(),
      publishedTime: z.date(),
      draft: z.boolean().optional().default(false),
      canonicalURL: z.string().optional(),
      opengraphImage: z.string().optional(),
      tags: z.array(z.string()).default([])
    })
})

const projects = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      url: z.string().optional(),
      startTime: z.date(),
      endTime: z.date().optional().nullable(),
      tags: z.array(z.string()).default([])
    })
})

export const collections = { posts, projects }
