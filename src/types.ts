import type { HTMLAttributes } from 'astro/types'
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
  navBarItems: NavItem[]
  footerIcons: NavItem[]

  locale: string
  mode: Mode
  modeToggle: boolean
  colorScheme: ColorScheme
  opengraphImage: HTMLAttributes<'img'> | string | undefined
  postsPerPage: number
  projectsPerPage: number
  scrollProgress: boolean
  scrollToTop: boolean
  tagIcons: Record<string, Icon>
}

const defaults = {
  locale: 'en',
  mode: Modes[0],
  modeToggle: true,
  colorScheme: ColorSchemes[0],
  opengraphImage: undefined,
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
