import type { MarkdownInstance } from 'astro'
import { getCollection } from 'astro:content'

export async function getTools() {
  const tools = await getCollection('tools')

  return tools
}

export function getToolsPageDescription() {
  const globMatches = Object.values(
    import.meta.glob('../../content/tools.md', {
      eager: true
    })
  ) as MarkdownInstance<object>[]

  if (globMatches.length > 0) return globMatches[0].Content
}
