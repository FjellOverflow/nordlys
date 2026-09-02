import getReadingTime from 'reading-time'

type MdastNode = {
  value?: string
  alt?: string
  children?: MdastNode[]
}

const toString = (node: MdastNode | MdastNode[]): string => {
  if (Array.isArray(node)) return node.map(toString).join('')
  if (typeof node !== 'object' || node === null) return ''
  if (node.value !== undefined) return node.value
  if (node.alt) return node.alt
  if (node.children) return toString(node.children)
  return ''
}

export default function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (tree: any, { data }: any) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    data.astro.frontmatter.readingTime = readingTime.text
  }
}
