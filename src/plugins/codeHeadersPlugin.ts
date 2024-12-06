/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Icon } from '@/types'

const iconMap: Record<string, Icon> = {
  plaintext: 'tabler--dots',

  'angular-html': 'tabler--brand-angular',
  'angular-ts': 'tabler--brand-angular',
  astro: 'tabler--brand-astro',
  cpp: 'tabler--brand-cpp',
  csharp: 'tabler--brand-c-sharp',
  cs: 'tabler--brand-c-sharp',
  css: 'tabler--brand-css3',
  csv: 'tabler--csv',
  diff: 'tabler--file-diff',
  docker: 'tabler--brand-docker',
  dockerfile: 'tabler--brand-docker',
  go: 'tabler--brand-golang',
  graphql: 'tabler--brand-graphql',
  gql: 'tabler--brand-graphql',
  html: 'tabler--brand-html5',
  javascript: 'tabler--brand-javascript',
  js: 'tabler--brand-javascript',
  json: 'tabler--json',
  jsonc: 'tabler--json',
  jsx: 'tabler--brand-react',
  kotlin: 'tabler--brand-kotlin',
  kt: 'tabler--brand-kotlin',
  kts: 'tabler--brand-kotlin',
  markdown: 'tabler--markdown',
  md: 'tabler--markdown',
  mdx: 'tabler--markdown',
  php: 'tabler--brand-php',
  powershell: 'tabler--brand-powershell',
  ps: 'tabler--brand-powershell',
  ps1: 'tabler--brand-powershell',
  python: 'tabler--brand-python',
  py: 'tabler--brand-python',
  rust: 'tabler--brand-rust',
  rs: 'tabler--brand-rust',
  sass: 'tabler--brand-sass',
  shellscript: 'tabler--terminal',
  bash: 'tabler--terminal',
  sh: 'tabler--terminal',
  shell: 'tabler--terminal',
  zsh: 'tabler--terminal',
  sql: 'tabler--sql',
  svelte: 'tabler--brand-svelte',
  swift: 'tabler--brand-swift',
  tsx: 'tabler--brand-typescript',
  typescript: 'tabler--brand-typescript',
  ts: 'tabler--brand-typescript',
  vue: 'tabler--brand-vue',
  'vue-html': 'tabler--brand-vue',
  xml: 'tabler--file-type-xml'
}

function generateHeaderTitle(label: string) {
  return {
    type: 'element',
    tagName: 'code',
    properties: { className: ['label'] },
    children: [{ type: 'text', value: label }]
  }
}

function generateHeaderIcon(lang: string) {
  const icon = iconMap[lang || 'plaintext'] || iconMap['plaintext']
  const textSize = icon === iconMap['plaintext'] ? 'text-5xl' : 'text-2xl'

  return {
    type: 'element',
    tagName: 'span',
    properties: { className: ['lang-icon', 'iconify', icon, textSize] },
    children: []
  }
}

const copyCodeBtn = {
  type: 'element',
  tagName: 'button',
  properties: {
    title: 'Copy code',
    'aria-label': 'Copy code',
    className: ['flex', 'items-center']
  },
  children: [
    {
      type: 'element',
      tagName: 'span',
      properties: {
        'aria-hidden': 'true',
        className: ['copy-btn']
      }
    }
  ]
}

const preTransformer = (label?: string, lang?: string) => (ast: any) => {
  const styles = parseStyleProps(ast.properties.style)

  const color = styles['color']
  const colorDark = styles['--shiki-dark']
  const bg = styles['background-color']
  const bgDark = styles['--shiki-dark-bg']

  const codeHeader = {
    type: 'element',
    tagName: 'div',
    properties: { className: ['flex', 'gap-2'] },
    children: [] as Array<any>
  }

  if (lang) codeHeader.children.push(generateHeaderIcon(lang))
  if (label) codeHeader.children.push(generateHeaderTitle(label))

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
        children: [codeHeader, copyCodeBtn]
      },
      ast
    ]
  }
}

export default {
  preprocess: (_raw: string, options: any) => {
    const pre = preTransformer(options.meta?.__raw, options.lang)
    options.transformers[1].pre = pre
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
