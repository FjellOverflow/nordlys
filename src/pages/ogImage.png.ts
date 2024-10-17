import ogImages from '@/ogImages'
import config from '@/theme.config'
import { Resvg } from '@resvg/resvg-js'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  if (config.openGraphImage) return new Response()

  const svg = await ogImages.site()
  const png = new Resvg(svg).render().asPng()

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' }
  })
}
