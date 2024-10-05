import { renderPostOG } from '@/helpers/generateOG'
import { getPosts } from '@/util/posts'
import { Resvg } from '@resvg/resvg-js'
import type { APIContext, APIRoute, InferGetStaticPropsType } from 'astro'

export async function getStaticPaths() {
  const posts = (await getPosts()).filter((p) => !p.data.opengraphImage)

  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }))
}

export const GET: APIRoute = async ({ props }: APIContext) => {
  const { post } = props as InferGetStaticPropsType<typeof getStaticPaths>
  const { title, description, author } = post.data

  const svg = await renderPostOG(title, description, author)
  const png = new Resvg(svg).render().asPng()

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' }
  })
}
