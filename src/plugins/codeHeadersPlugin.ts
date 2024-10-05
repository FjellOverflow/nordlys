interface PostProcessOptions {
  meta?: {
    __raw?: string
  }
  lang: string
}

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
  return `<div class="astro-code-header">
            <div class="flex gap-2">
              ${getIcon(lang)}
              ${getLabel(label)}
            </div>
            <span class="copy-btn"></span>
          </div>`
}

export default {
  postprocess: (html: string, options: PostProcessOptions) => {
    return `<div>
              ${generateHeader(options.meta?.__raw, options.lang)}
              ${html}
            </div>`
  }
}
