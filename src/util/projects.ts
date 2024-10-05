import { getCollection, type CollectionEntry } from 'astro:content'

export const sortProjects = (
  p1: CollectionEntry<'projects'>,
  p2: CollectionEntry<'projects'>
) => {
  const endDateDiff =
    (p2.data.endDate?.getTime() || Number.MAX_SAFE_INTEGER) -
    (p1.data.endDate?.getTime() || Number.MAX_SAFE_INTEGER)
  const startDateDiff =
    p2.data.startDate.getTime() - p1.data.startDate.getTime()

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
