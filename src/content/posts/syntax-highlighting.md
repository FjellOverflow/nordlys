---
title: Syntax highlighting
description: Code blocks and syntax highlighting in Nordlys
publishedDate: 2024-09-28
tags:
  - documentation
---

Nordlys, out of the box, offers well-styled code blocks with customization features, in addition to the basic syntax highlighting [by Astro](https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting). This post showcases and explains the various customization options available.

## Basic Example

As always, we can embed code into `.md` and `.mdx` files by using code fences (```).

````md pages/example.md
```
sudo apt update
```
````

The code above renders to:

```
sudo apt update
```

Notice that, thanks to some post-processing and styling by Nordlys, the code block also has a header. Clicking on the <span class="iconify tabler--copy"></span> icon in the header copies the embedded code to the clipboard.

## Setting the Code Language

Nordlys can also render an icon that matches the code-language in the header. When adding `javascript` as the code language after the first backticks(```), the code block will have _JavaScript_ syntax highlighting and display a small <span class="iconify tabler--brand-javascript"></span> icon in the header.

````md pages/example.md
```javascript
const sortedArray = [3, 1, 2].toSorted()
```
````

The code above renders to:

```javascript
const sortedArray = [3, 1, 2].toSorted()
```

If the code language is not specified or if a language that is not yet supported is used, the <span class="iconify text-4xl tabler--dots"></span> icon will be displayed, as seen in the [basic example](#basic-example).

## Adding a Label

We can also display a custom label in the code header, such as the name of a file containing our embedded code. To achieve this, we add a label **after** the code language, following the backticks. This means we need to specify the language to render a label.

````md pages/example.md
```python scripts/sorting.py
sortedList = sorted([3, 1, 2])
```
````

The code above renders to:

```python scripts/sorting.py
sortedList = sorted([3, 1, 2])
```

## Changing Color Scheme

It is also possible to change the colors of the code blocks, by changing the `shikiThemes` in `theme.config.ts`. For a list of avaible themes, refer to the [Shiki documentation](https://shiki.style/themes).

```typescript theme.config.ts
export default defineThemeConfig({
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
  // ... other settings
})
```
