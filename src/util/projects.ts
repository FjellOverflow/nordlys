import { getCollection, type CollectionEntry } from 'astro:content'

export const sortProjects = (
  p1: CollectionEntry<'projects'>,
  p2: CollectionEntry<'projects'>
) => {
  if (!p1.data.startDate && !p2.data.startDate)
    return p1.data.title.localeCompare(p2.data.title)

  if (!p1.data.startDate && p2.data.startDate) return 1

  if (p1.data.startDate && !p2.data.startDate) return -1

  const endDateDiff =
    (p2.data.endDate?.getTime() || Number.MAX_SAFE_INTEGER) -
    (p1.data.endDate?.getTime() || Number.MAX_SAFE_INTEGER)
  const startDateDiff =
    (p2.data.startDate?.getTime() || 0) - (p1.data.startDate?.getTime() || 0)

  return (
    endDateDiff || startDateDiff || p1.data.title.localeCompare(p2.data.title)
  )
}

export const getProjects = async (tag?: string) => {
  const projects = await getCollection('projects')

  projects.sort(sortProjects)

  return projects.filter(
    (p) =>
      !tag || p.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}
