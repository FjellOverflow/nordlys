import { defineThemeConfig } from '@/types'

export default defineThemeConfig({
  site: 'https://nordlys.fjelloverflow.dev',
  title: 'Nordlys',
  description: 'A sleek, minimal Astro blog template',
  author: 'FjellOverflow',
  navBarItems: [
    { label: 'Blog', href: '/posts' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tags', href: '/tags' },
    { label: 'About', href: '/about' }
  ],
  footerIcons: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/FjellOverflow/nordlys',
      label: 'Github'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  defaultTheme: 'dark',
  darkLightToggle: true,
  colorTheme: 'theme-mono',
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  }
})
