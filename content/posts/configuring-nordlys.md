---
title: Configuring Nordlys
description: How to configure the theme with the theme.config.ts
publishedDate: 2024-10-07
tags:
  - documentation
---

The Nordlys theme offers a variety of configurable options, outlined here. To learn about using highlighted code blocks, refer to [Syntax Highlighting](/posts/syntax-highlighting). You can explore color customizations in [Color Schemes](/posts/color-schemes). For details on adding new content to the site, check out [Writing Content](/posts/writing-content).

For most common customizations, you will only need to modify the `theme.config.ts` file. Thanks to Typescript, this file is typed and will displays warnings if options are missing or malformed.

## Mandatory Settings

The following options must always be set:

```ts src/theme.config.ts
export default defineThemeConfig({
  site: 'https://my-awesome-site.com',
  title: 'My awesome site',
  description: 'My awesome site is a blog about awesome things',
  author: 'John Doe',
  navbarItems: [
    { label: 'Blog', href: '/posts' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tags', href: '/tags' },
    { label: 'About', href: '/about' },
    {
      label: 'Other pages',
      children: [
        { label: 'Landing page', href: '/' },
        { label: '404 page', href: '/404' },
        { label: 'Author: FjellOverflow', href: '/authors/FjellOverflow' },
        { label: 'Tag: documentation', href: '/tags/documentation' }
      ]
    }
  ],
  footerItems: [
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ]

  //... others are optional
})
```

### Site

`site` is the URL where the website will be deployed. It is used to generate correct canonical URLs in the final build and is directly fed into `astro.config.ts`.

### Title

The `title` of your website is used for site meta, the header bar, OG images, and more. When users visit a page of your site, the browser tab will display as `Some page | My awesome site`.

### Description

The `description` is a meta tag that provides a brief summary of your website's content.

### Author

`author` is also a meta tag and serves as the default author for all blog posts where no specific author is set.

### Navbar- & Footer items

`footerItems` are lists of items that include a `label`, a `href` and, optionally, an `icon`. These items are displayed in the footer. Similarly `navbarItems` are displayed in the header and have the additional behavior of being highlighted when active. For example the item labeled `About` will be highlighted when a page with `activeHeaderLink: About` in its frontmatter is viewed. Additionally, `navbarItems` can also be expandable dropdowns, by omitting the `href` and instead specifying a `children` array, containing plain items.

## Optional Settings

The following settings are optional and will default to preset values (as shown here) if not configured:

```ts src/theme.config.ts
export default defineThemeConfig({
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-mono',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  }, // default is {}
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }

  // ... others are mandatory
})
```

### Locale

`locale` is a meta attribute used for setting the language and region of your site.

### Mode

`mode` can be set to either `dark` or `light`. This will be the default mode the site opens in, until the user manually changes it.

### Mode Toggle

When `modeToggle` is enabled, a sun/moon toggle button will be displayed, allowing users to switch between light and dark modes.

### Color Scheme

`colorScheme` allows you to set accent and background colors for the site. Read more in [Color Schemes](/posts/color-schemes).

### Opengraph Image

Defining [Open Graph](https://ogp.me/) attributes ensures your website has visually appealing and meaningful preview cards when shared on social media platforms. The defined `openGraphImage` will be used as the preview image for every page, except blog posts, unless explicitly defined in the frontmatter. If `undefined`, Open Graph images will be auto-generated using the site's title, description, and logo.

### Posts/Projects per Page

`postPerPage` and `projectsPerPage` control the number of posts and projects displayed per page.

### Scroll Progress

When `scrollProgress` is enabled (it’s automatically on for blog posts), a sticky progress bar in the accent color will appear at the top of the page, showing how far the user has scrolled.

### Scroll to Top

When `scrollToTop` is enabled (automatically on blog posts), an arrow button will appear in the bottom right corner of the screen after scrolling, allowing users to quickly return to the top of the page.

### Tag Icons

When defining tags for posts and projects, a default icon will be used. With `tagIcons` you can map specific tags to icons - for instance, map the tag `astro` to `tabler--brand-astro`.

### Shiki themes

Set `shikiThemes` to your preferred [Shiki themes](https://shiki.style/themes) (separate dark and light versions) to highlight code blocks as desired.
