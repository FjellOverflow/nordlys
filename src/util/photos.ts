import type { MarkdownInstance } from 'astro'
import { getCollection } from 'astro:content'
export async function getAlbums() {
  const albums = await getCollection('albums')

  return albums
}

export function getPhotosPageDescription() {
  const globMatches = Object.values(
    import.meta.glob('../../content/photos.md', {
      eager: true
    })
  ) as MarkdownInstance<object>[]

  if (globMatches.length > 0) return globMatches[0].Content
}
