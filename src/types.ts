import type { SetOptional } from 'type-fest'

type Icon = `tabler--${string}`

export interface ResolvedTag {
  tag: string
  icon: Icon
}

interface NavItem {
  label: string
  href: string
  icon?: Icon
}

const Themes = ['dark', 'light'] as const

export const ColorThemes = [
  'theme-mono',
  'theme-nord',
  'theme-aurora',
  'theme-js',
  'theme-ubuntu'
] as const

export type Theme = (typeof Themes)[number]
export type ColorTheme = (typeof ColorThemes)[number]

export interface ThemeConfig {
  site: string
  title: string
  description: string
  author: string
  navBarItems: NavItem[]
  footerIcons: NavItem[]

  locale: string
  defaultTheme: Theme
  darkLightToggle: boolean
  colorTheme: ColorTheme
  postsPerPage: number
  projectsPerPage: number
  scrollProgress: boolean
  scrollToTop: boolean
  tagIcons: Record<string, Icon>
}

const defaults = {
  locale: 'en',
  defaultTheme: Themes[0],
  darkLightToggle: true,
  colorTheme: ColorThemes[0],
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {}
}

type PartialThemeConfig = SetOptional<ThemeConfig, keyof typeof defaults>

export const defineThemeConfig = (config: PartialThemeConfig): ThemeConfig => {
  return {
    ...defaults,
    ...config
  }
}
