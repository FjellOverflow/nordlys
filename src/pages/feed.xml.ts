import config from '@/theme.config'
import { getPosts } from '@/util/posts'
import rss from '@astrojs/rss'

export async function GET() {
  const posts = await getPosts()

  return rss({
    title: config.title,
    description: config.description,
    site: config.site,
    items: posts.map(({ data, slug }) => ({
      link: `posts/${slug}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.publishedDate)
    })),
    customData: `<language>${config.locale}</language>`
  })
}
