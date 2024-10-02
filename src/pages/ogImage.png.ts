import { renderOG } from '@/helpers/generateOG'
import config from '@/theme.config'
import { Resvg } from '@resvg/resvg-js'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  if (config.opengraphImage) return new Response()

  const svg = await renderOG()
  const png = new Resvg(svg).render().asPng()

  console.log(`\nGenerated ogImage.png`)

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' }
  })
}
