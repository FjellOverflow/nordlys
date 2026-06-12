import config from '@/theme.config'
import type { ResolvedTag } from '@/types'
import { getPosts } from '@/util/posts'
import { getProjects } from '@/util/projects'

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
  const allTags = [...(await getPosts()), ...(await getProjects())].flatMap(
    (p) => p.data.tags
  )

  return resolveTags([...new Set(allTags)])
}

export const getTagUsage = async (tag: string) => {
  const posts = (await getPosts(tag)).length
  const projects = (await getProjects(tag)).length

  return { posts, projects }
}

export const resolveTagLink = async (rawTag: string) => {
  const [{ tag, icon }] = resolveTags([rawTag])

  const usage = await getTagUsage(tag)

  return { tag, icon, usage }
}
