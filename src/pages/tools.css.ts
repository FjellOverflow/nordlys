import { getTools } from '@/util/tools'
import { icons } from '@iconify-json/simple-icons'
import { getIconsCSS } from '@iconify/utils'
import type { APIRoute } from 'astro'

const prefix = `${icons.prefix}--`

export const GET: APIRoute = async () => {
  const tools = await getTools()

  const names = [
    ...new Set(
      tools.flatMap(({ data: { items } }) =>
        items.map((item) => item.icon.slice(prefix.length))
      )
    )
  ]

  const css = getIconsCSS(icons, names, {
    iconSelector: `.${prefix}{name}`,
    mode: 'mask',
    varName: 'svg',
    format: 'compressed'
  })

  return new Response(css, {
    headers: { 'content-type': 'text/css; charset=utf-8' }
  })
}
