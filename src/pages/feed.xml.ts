import { getPosts } from '@/helpers/util'
import config from '@/theme.config'
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
      pubDate: new Date(data.publishedTime)
    })),
    customData: `<language>${config.locale}</language>`
  })
}
