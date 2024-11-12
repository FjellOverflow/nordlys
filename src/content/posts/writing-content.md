---
title: Writing content
description: Adding new pages, blog posts & projects to Nordlys
publishedDate: 2024-10-06
tags:
  - documentation
---

Adding content in Nordlys is as easy as creating a new Markdown (or [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/)) file and starting to write. For projects and blog posts, `src/content/config.ts` contains the schema definitions, thus defines what properties need to and can be set in the frontmatter.

## Adding a New Page

To add a new page to Nordlys, navigate to the `src/pages` and create a new Markdown file. Most likely you'll want the page to use the default layout, so set that in the frontmatter. After that, you can start writing your content.

```markdown src/pages/faq.md
---
layout: '@/layouts/PageLayout.astro'
title: FAQ
---

## How can I contact you?

You can contact me at ...
```

Go to `localhost:4321/faq` in your browser, and you will now see your newly created FAQ page! The frontmatter of a page is defined as follows.

```ts
// non-set properties default to the properties set in the theme config
type PageFrontmatter = {
  title?: string // tab title
  author?: string // meta
  description?: string // meta
  canonicalURL?: string // meta
  openGraphImage?: string | ImageMetadata // relative URL to image in public folder or local asset
  publishedDate?: Date // meta
  scrollProgress?: boolean // bar indicating scroll location on top of page
  activeHeaderLink?: string // title or href of the active header link
  scrollToTop?: boolean // "Back to top" button when having scrolled far down
}
```

## Writing a Blog Post

Writing a blog post is essentially the same as adding a new page, with slightly different frontmatter. You can follow the same procedure, except you'll create the file in the `src/content/posts` directory.

```markdown src/content/posts/i-learned-today.md
---
title: I learned something
description: A quick update on the new things I learned
publishedDate: 2024-10-06
tags:
  - programming
  - TIL
---

So today, I started learning a new programming language. It is really cool because ...
```

Navigate to `localhost:4321/posts`, and your new post will have appear there. Clicking on it will show the content you wrote, nicely rendered as text! The frontmatter of a post is defined as follows.

```ts
type PostFrontmatter = {
  title: string
  author?: string // defaults author set in theme config
  description: string
  publishedDate: Date
  draft?: boolean // defaults to false
  canonicalURL?: string // meta
  openGraphImage?: string | ImageMetadata // either URL to image in public folder or local asset
  tags?: string[] // defaults to []
  showToC?: boolean // show a Table of Contents, defaults to true
}
```

## Adding a New Project

To add a new project in Nordlys, simply create a file in the `src/content/projects` directory. Set the project properties, write a short description, and you're done!

```markdown src/content/projects/awesome-app.md
---
title: Awesome App
startDate: 2023-10-06
endDate: 2024-10-06
tags:
  - HTML
  - CSS
  - TypeScript
---

I developed an awesome app, using `HTML`, `CSS` and `TypeScript`! The app can ...
```

Take a look at `localhost:4321/projects`, and your new project should be listed there! The frontmatter of a project is defined as follows.

```ts
type ProjectFrontmatter = {
  title: string
  url?: string // can be relative or absolute
  startDate: Date
  endDate?: Date // shows "Now" if not set
  tags?: string[] // defaults to []
  previewImage: string | ImageMetadata // either URL to image in public folder or local asset
}
```

Note that projects don't generate a dedicated page, but are just listed on the `/projects` page.
