import { toString } from 'mdast-util-to-string'
import getReadingTime from 'reading-time'

export default function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (tree: any, { data }: any) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    data.astro.frontmatter.readingTime = readingTime.text
  }
}
