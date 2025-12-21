---
title: Syntax Highlighting
description: Code blocks and syntax highlighting in Nordlys
publishedDate: 2025-12-24
tags:
  - documentation
previewImage: '../assets/posts/thumbnail.png'
---

Nordlys, out of the box, offers well-styled code blocks, powered by [Expressive Code](https://expressive-code.com/), with some addtional tweaks. This post outlines the basics of syntax highlighting; for more detailed information, customization options and examples, consult the [Expressive Code docs](https://expressive-code.com/key-features/syntax-highlighting/).

## Basics

### Code fences

Code can be embedded into Markdown (`.md` and `.mdx`) files by using code fences (```).

````md title="pages/example.md"
```
sudo apt update
```
````

The code above renders to:

```
sudo apt update
```

### Setting the Code Language

By setting a language for the code block, the code will have appropriate syntax highlighting.

````md title="pages/example.md"
```javascript
const sortedArray = [3, 1, 2].toSorted()
```
````

The code above renders to:

```javascript
const sortedArray = [3, 1, 2].toSorted()
```

### Editor & Terminal frames

To render an editor-like filename label, supply a title to the code block. If available for the selected language, Nordlys will also display an appropriate language icon in the code block header.

````md title="pages/example.md"
```python title="scripts/sorting.py"
sortedList = sorted([3, 1, 2])
```
````

The code above renders to:

```python title="scripts/sorting.py"
sortedList = sorted([3, 1, 2])
```

When a shell language is used, the code block will instead be rendered as a terminal frame.

````md title="pages/example.md"
```bash title="Update Debian packages"
sudo apt update
```
````

The code above renders to:

```bash title="Update Debian packages"
sudo apt update
```

## Advanced Examples

The following showcases more advanced usage of syntax highlighting.

### Marking lines

Mark lines and ranges of lines with `{1, 4, 7-8}`.

```js {1, 4, 7-8}
// Line 1 - targeted by line number
// Line 2
// Line 3
// Line 4 - targeted by line number
// Line 5
// Line 6
// Line 7 - targeted by range "7-8"
// Line 8 - targeted by range "7-8"
```

Marked as deleted, inserted or neutral, with `del={2} ins={3-4} {6}`.

```js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
  console.log('this line is marked as deleted')
  // This line and the next one are marked as inserted
  console.log('this is the second inserted line')

  return 'this line uses the neutral default marker type'
}
```

Label markers with `{"1":5} del={"2":7-8} ins={"3":10-12}`.

```jsx {"1":5} del={"2":7-8} ins={"3":10-12}
// labeled-line-markers.jsx
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

### Marking individual text

Mark individual strings with `"given text"`.

```js "given text"
function demo() {
  // Mark any given text inside lines
  return 'Multiple matches of the given text are supported'
}
```

Mark with RegEx with `/ye[sp]/`.

```ts /ye[sp]/
console.log('The words yes and yep will be marked.')
```

Mark inserted or deleted with `"return true" ins="inserted" del="deleted"`.

```js "return true" ins="inserted" del="deleted"
function demo() {
  console.log('These are inserted and deleted marker types')
  // The return statement uses the default marker type
  return true
}
```

### Diff

Use `diff` to highlight changes.

```diff
+ this line will be marked as inserted
- this line will be marked as deleted
  this is a regular line
```

Use `diff lang="javascript"` to highlight changes while keeping proper syntax highlighting.

```diff lang="js"
  function thisIsJavaScript() {
    // This entire block gets highlighted as JavaScript,
    // and we can still add diff markers to it!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```

`diff` can also be used on actual diff files.

```diff
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
+this is an actual diff file
-all contents will remain unmodified
 no whitespace will be removed either
```

### Collapse lines

Collapse lines with `collapse={1-5, 12-14, 21-24}`.

```js collapse={1-5, 12-14, 21-24}
// All this boilerplate setup code will be collapsed
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// This part of the code will be visible by default
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // You can have multiple collapsed sections
  const a = 1
  const b = 2
  const c = a + b

  // This will remain visible
  console.log(`Calculation result: ${a} + ${b} = ${c}`)
  return c
}

// All this code until the end of the block will be collapsed again
engine.closeConnection()
engine.freeMemory()
engine.shutdown({ reason: 'End of example boilerplate code' })
```

### Line Numbers

Show line numbers with `showLineNumbers`.

```js showLineNumbers
// This code block will show line numbers
console.log('Greetings from line 2!')
console.log('I am on line 3')
```

Change starting line number with `showLineNumbers startLineNumber=5`.

```js showLineNumbers startLineNumber=5
console.log('Greetings from line 5!')
console.log('I am on line 6')
```

## Changing Color Scheme

It is also possible to change the colors of the code blocks, by changing the `expressiveCodeThemes` in `theme.config.ts`. For a list of available themes, refer to the [Expressive Code documentation](https://expressive-code.com/guides/themes/).

```typescript title="theme.config.ts"
export default defineThemeConfig({
  expressiveCodeThemes: [
    'vitesse-light', // first is light theme
    'vitesse-black' // second is dark theme
  ]
  // ...
})
```
