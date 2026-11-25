import type { AstroExpressiveCodeOptions } from 'astro-expressive-code'
import type { colorSchemes } from '@/colorSchemes'

type Simplify<T> = { [K in keyof T]: T[K] } & {}

type SetOptional<T, K extends keyof T> = Simplify<
  Omit<T, K> & Partial<Pick<T, K>>
>

export type RequireAtLeastOne<T, K extends keyof T = keyof T> = Omit<T, K> &
  {
    [Key in K]-?: Required<Pick<T, Key>> & Partial<Pick<T, Exclude<K, Key>>>
  }[K]

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

export const ViewOptions = ['list', 'grid'] as const

export type Mode = (typeof Modes)[number]
export type ColorScheme = keyof typeof colorSchemes
export type RgbColor = readonly [number, number, number]

export interface ColorSchemeColors {
  accent: RgbColor
  accentBg: RgbColor
}

export interface ColorSchemeDefinition {
  light: ColorSchemeColors
  dark: ColorSchemeColors
}

export type ViewOption = (typeof ViewOptions)[number]

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
  colorScheme: ColorScheme | ColorSchemeDefinition
  openGraphImage: ImageMetadata | string | undefined
  postsPerPage: number
  postsView: ViewOption
  projectsPerPage: number
  projectsView: ViewOption
  scrollProgress: boolean
  scrollToTop: boolean
  tagIcons: Record<string, Icon>
  expressiveCodeThemes: AstroExpressiveCodeOptions['themes']
}

const defaults = {
  locale: 'en',
  mode: Modes[0],
  modeToggle: true,
  colorScheme: 'scheme-mono' as ColorScheme,
  openGraphImage: undefined,
  postsPerPage: 4,
  postsView: 'list' as ViewOption,
  projectsPerPage: 3,
  projectsView: 'list' as ViewOption,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {},
  expressiveCodeThemes: [
    'vitesse-light',
    'vitesse-black'
  ] as AstroExpressiveCodeOptions['themes']
}

type PartialThemeConfig = SetOptional<ThemeConfig, keyof typeof defaults>

export const defineThemeConfig = (config: PartialThemeConfig): ThemeConfig => {
  return {
    ...defaults,
    ...config
  }
}
