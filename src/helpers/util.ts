import config from '@/theme.config'
import type { ResolvedTag } from '@/types'
import { getCollection, type CollectionEntry } from 'astro:content'

export const toDateString = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

export const toMonthString = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: undefined
  })

export const sortTags = (t1: ResolvedTag, t2: ResolvedTag) =>
  t1.tag.localeCompare(t2.tag)

export const resolveTags = (rawTags: string[]): ResolvedTag[] => {
  const resolvedTags = [...new Set(rawTags)].map((t) => {
    const tag = t.toLowerCase()

    return {
      tag,
      icon: config.tagIcons[tag] || 'tabler--tag'
    }
  })

  resolvedTags.sort(sortTags)

  return resolvedTags
}

export const generateTags = async (): Promise<ResolvedTag[]> => {
  const postTags = (await getPosts()).flatMap((post) => post.data.tags)
  const projectsTags = (await getCollection('projects')).flatMap(
    (project) => project.data.tags
  )

  return resolveTags([...postTags, ...projectsTags])
}

export const getTagUsage = async (tag: string): Promise<number> =>
  (await getPosts(tag)).length +
  (
    await getCollection('projects', (project) =>
      project.data.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
    )
  ).length

export const sortPosts = (
  p1: CollectionEntry<'posts'>,
  p2: CollectionEntry<'posts'>
) => p2.data.publishedTime.getTime() - p1.data.publishedTime.getTime()

export const sortProjects = (
  p1: CollectionEntry<'projects'>,
  p2: CollectionEntry<'projects'>
) => {
  const endTimeDiff =
    (p2.data.endTime?.getTime() || Number.MAX_SAFE_INTEGER) -
    (p1.data.endTime?.getTime() || Number.MAX_SAFE_INTEGER)
  const startTimeDiff =
    p2.data.startTime.getTime() - p1.data.startTime.getTime()

  return (
    endTimeDiff || startTimeDiff || p1.data.title.localeCompare(p2.data.title)
  )
}

export const getPosts = async (
  tag?: string,
  includeDrafts = import.meta.env.DEV
) => {
  const posts = await getCollection('posts')

  posts.sort(sortPosts)

  return posts
    .filter(
      (p) =>
        !tag || p.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
    .filter((p) => includeDrafts || !p.data.draft)
}
