import type { NavItem } from '@/types'
import { isAbsoluteUrl } from '@/util'

const withoutTrailingSlash = (path: string) => path.replace(/\/+$/, '')

const isUnderHref = (pathname: string, href: string) => {
  if (isAbsoluteUrl(href)) return false

  const base = withoutTrailingSlash(href)
  const path = withoutTrailingSlash(pathname)

  if (base === '') return path === ''

  return path === base || path.startsWith(`${base}/`)
}

export const isActiveNavItem = (
  item: NavItem,
  pathname: string,
  activeHeaderLink?: string
) =>
  activeHeaderLink === undefined
    ? isUnderHref(pathname, item.href)
    : activeHeaderLink === item.label ||
      withoutTrailingSlash(activeHeaderLink) === withoutTrailingSlash(item.href)
