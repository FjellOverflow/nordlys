/* eslint-disable @typescript-eslint/no-explicit-any */
const PLACEHOLDER = '$CODE_HEADER_PLACEHOLDER$'

const iconMap: Record<string, string> = {
  plaintext: 'tabler--dots',

  ts: 'tabler--brand-typescript',
  typescript: 'tabler--brand-typescript',

  js: 'tabler--brand-javascript',
  javascript: 'tabler--brand-javascript',

  jsx: 'tabler--brand-react',
  tsx: 'tabler--brand-react',

  css: 'tabler--brand-css3',
  vue: 'tabler--brand-vue',
  astro: 'tabler--brand-astro',
  docker: 'tabler--brand-docker',
  python: 'tabler--brand-python',
  json: 'tabler--braces',
  md: 'tabler--markdown',
  markdown: 'tabler--markdown'
}

function getLabel(label?: string) {
  if (!label) return ''

  return `<code class="label">${label}</code>`
}

function getIcon(lang?: string) {
  const icon = iconMap[lang || 'plaintext'] || iconMap['plaintext']
  const textSize = icon === iconMap['plaintext'] ? 'text-5xl' : 'text-2xl'

  return `<span class="lang-icon iconify ${icon} ${textSize}"></span>`
}

function generateHeader(label?: string, lang?: string) {
  return `<div class="flex gap-2">
            ${getIcon(lang)}
            ${getLabel(label)}
          </div>
          <span class="copy-btn"></span>`
}

export default {
  postprocess: (html: string, options: any) => {
    const codeHeader = generateHeader(options.meta?.__raw, options.lang)
    return html.replace(PLACEHOLDER, codeHeader)
  },
  pre: (pre: any): any => {
    const styles = parseStyleProps(pre.properties.style)

    const color = styles['color']
    const colorDark = styles['--shiki-dark']
    const bg = styles['background-color']
    const bgDark = styles['--shiki-dark-bg']

    return {
      type: 'element',
      tagName: 'div',
      properties: {
        style: `--code-header-color:${color};--code-header-color-dark:${colorDark};--code-header-bg:${bg};--code-header-bg-dark:${bgDark}`
      },
      children: [
        {
          type: 'element',
          tagName: 'div',
          properties: {
            class: `astro-code-header`
          },
          children: [{ type: 'text', value: PLACEHOLDER }]
        },
        pre
      ]
    }
  }
}

function parseStyleProps(style: string): Record<string, string> {
  const propArr = style.split(';')

  const propMap: Record<string, string> = {}

  propArr.forEach((prop) => {
    const [key, val] = prop.split(':')
    propMap[key] = val
  })

  return propMap
}
