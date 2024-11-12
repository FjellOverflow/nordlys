import type { ShikiConfig } from 'astro'
import type { SetOptional } from 'type-fest'

export type Icon = `tabler--${string}`

export interface ResolvedTag {
  tag: string
  icon: Icon
}

export interface NavItem {
  label: string
  href: string
  icon?: Icon
}

export interface NavItemParent {
  label: string
  icon?: Icon
  children: NavItem[]
}

export type HeaderItem = NavItem | NavItemParent

const Modes = ['dark', 'light'] as const

export const ColorSchemes = [
  'scheme-mono',
  'scheme-nord',
  'scheme-aurora'
] as const

export type Mode = (typeof Modes)[number]
export type ColorScheme = (typeof ColorSchemes)[number]

export interface ThemeConfig {
  site: string
  title: string
  description: string
  author: string
  navbarItems: HeaderItem[]
  footerItems: NavItem[]

  locale: string
  mode: Mode
  modeToggle: boolean
  colorScheme: ColorScheme
  openGraphImage: ImageMetadata | string | undefined
  postsPerPage: number
  projectsPerPage: number
  scrollProgress: boolean
  scrollToTop: boolean
  tagIcons: Record<string, Icon>
  shikiThemes: ShikiConfig['themes']
}

const defaults = {
  locale: 'en',
  mode: Modes[0],
  modeToggle: true,
  colorScheme: ColorSchemes[0],
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {},
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  } as ShikiConfig['themes']
}

type PartialThemeConfig = SetOptional<ThemeConfig, keyof typeof defaults>

export const defineThemeConfig = (config: PartialThemeConfig): ThemeConfig => {
  return {
    ...defaults,
    ...config
  }
}
