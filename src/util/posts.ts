import { getCollection, type CollectionEntry } from 'astro:content'

export const sortPosts = (
  p1: CollectionEntry<'posts'>,
  p2: CollectionEntry<'posts'>
) => p2.data.publishedDate.getTime() - p1.data.publishedDate.getTime()

export const getPosts = async (
  tag?: string,
  author?: string,
  includeDrafts = import.meta.env.DEV
) => {
  const posts = await getCollection('posts')

  posts.sort(sortPosts)

  return posts
    .filter(
      (p) =>
        !tag || p.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
    .filter(
      (p) => !author || p.data.author.toLowerCase() === author.toLowerCase()
    )
    .filter((p) => includeDrafts || !p.data.draft)
}

export const adjacentPosts = async (post: CollectionEntry<'posts'>) => {
  const reversedPosts = (await getPosts()).reverse()
  const postIndex = reversedPosts.findIndex((p) => p.id === post.id)

  if (postIndex < 0) return {}

  return {
    previous: reversedPosts[postIndex - 1],
    next: reversedPosts[postIndex + 1]
  }
}

export const generateAuthors = async () => {
  const posts = await getPosts()

  return [...new Set(posts.map((p) => p.data.author))]
}
