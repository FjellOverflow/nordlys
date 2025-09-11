# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [3.0.0](https://github.com/FjellOverflow/nordlys/compare/v2.5.0...v3.0.0) (2025-09-11)


### ⚠ BREAKING CHANGES

From this version on, Nordlys uses [Expressive Code](https://expressive-code.com/) for syntax highlighting. While most changes are under the hood, you may need to adjust your code blocks, most notably, the code block header/title:

````md
// old syntax (Nordlys < v3.0.0)
```javascript myScript.js
const sortedArray = [3, 1, 2].toSorted()
```

// new syntax (Nordlys >= v3.0.0)
```javascript title="myScript.js"
const sortedArray = [3, 1, 2].toSorted()
```
````

Furthermore, this change adds many powerful new features to syntax highlighting that you may want to adopt. For examples, see this [Nordlys blost post](https://nordlys.fjelloverflow.dev/posts/syntax-highlighting/) or consult the [Expressive Code docs](https://expressive-code.com/key-features/syntax-highlighting/).

### Features

* add collapsibleSection and lineNumbers plugin for expressive-code ([de65075](https://github.com/FjellOverflow/nordlys/commit/de65075dc1824041abf6fe15a1b48370120ce540))
* add expresive-code ([bfff9c1](https://github.com/FjellOverflow/nordlys/commit/bfff9c17fb7af7f015d3f9bff2254a00732d80a1))
* codeBlock icons plugin for expressive-code blocks ([95b3700](https://github.com/FjellOverflow/nordlys/commit/95b370005397e9c424ae44cf98efd7ed86805bdd))

## [2.5.0](https://github.com/FjellOverflow/nordlys/compare/v2.4.0...v2.5.0) (2025-07-23)


### Features

* highlight active header in TOC ([5ad84e5](https://github.com/FjellOverflow/nordlys/commit/5ad84e532367335b5a7ba70b2209eb03415dc1c4))

## [2.4.0](https://github.com/FjellOverflow/nordlys/compare/v2.3.2...v2.4.0) (2025-07-20)


### Features

* improve appearance of links to adjacent blog posts ([b8baea8](https://github.com/FjellOverflow/nordlys/commit/b8baea869caa75a8ecac8300af423a1464e5b5dc))
* option to show latest blog post on landing page ([01c2b40](https://github.com/FjellOverflow/nordlys/commit/01c2b40fafc29081f1fa48b34192e3c3054736aa))

## [2.3.2](https://github.com/FjellOverflow/nordlys/compare/v2.3.1...v2.3.2) (2025-05-04)

## [2.3.1](https://github.com/FjellOverflow/nordlys/compare/v2.3.0...v2.3.1) (2025-05-04)

### Bug Fixes

- **seo:** redirect /posts & /projects to /posts/1 & /projects/1 for SEO optimization ([0c942ad](https://github.com/FjellOverflow/nordlys/commit/0c942ade3f1dbb445a13946a77d6bf8ec2cfe22b))

## [2.3.0](https://github.com/FjellOverflow/nordlys/compare/v2.2.0...v2.3.0) (2025-03-22)

### ⚠ BREAKING CHANGES

For medium-zoom on images, a new `data-action="zoom"` attribute has been introduced. That means images with the `data-img-embed` attributes will no longer be zoomable; to fix this you need to add the addtional attribute `data-action="zoom"` to your images.

### Features

- make project startDate optional, sort projects without to list bottom ([54fe562](https://github.com/FjellOverflow/nordlys/commit/54fe562662ba14753185c5dedd109c817f8c8da6))

### Bug Fixes

- add missing trailing slash to canonicalURL ([acedf7e](https://github.com/FjellOverflow/nordlys/commit/acedf7e03707e382a5a9478c8c8ab2dcc1351e27))
- correct dark mode colors for syntax highlighted blox ([c720e71](https://github.com/FjellOverflow/nordlys/commit/c720e717031d3edeadf07fc8d0b3e147ace9dbba))
- switch medium-zoom lib for better Safari browser support ([d3cc91b](https://github.com/FjellOverflow/nordlys/commit/d3cc91b551fffd4fafd9eeb0d321191a7ea5dd6d))

## [2.2.0](https://github.com/FjellOverflow/nordlys/compare/v2.1.3...v2.2.0) (2025-03-07)

### Features

- responsive margins for zoomed images ([9662d15](https://github.com/FjellOverflow/nordlys/commit/9662d159c2802cda74ab40bbdc15550b4034dd8a))

### Bug Fixes

- bump @tailwindcss/vite and load missing font ([9880b84](https://github.com/FjellOverflow/nordlys/commit/9880b84683c0955567229451e2bc57de04bf9570))
- remove unnecessary 404 link ([2a762b2](https://github.com/FjellOverflow/nordlys/commit/2a762b25cd7eae3c8fe1a6f9401fddef6f24ae05))

## [2.1.3](https://github.com/FjellOverflow/nordlys/compare/v2.1.2...v2.1.3) (2025-02-27)

### Bug Fixes

- load fonts from local files during OG image generation ([1874e64](https://github.com/FjellOverflow/nordlys/commit/1874e64564923761fa0aa8f1abf30dfad284659b))

## [2.1.2](https://github.com/FjellOverflow/nordlys/compare/v2.1.1...v2.1.2) (2025-02-26)

### Bug Fixes

- add missing trailing slashes to internal links ([8c189bd](https://github.com/FjellOverflow/nordlys/commit/8c189bd975fbbd5b3981dd5e0552497fcfccd3df))
- post preview image margins ([07d2ec8](https://github.com/FjellOverflow/nordlys/commit/07d2ec83d254a86618d566d6ec00948c37022d2b))
- prevent duplicate registration of already registered custom elements ([bf390c8](https://github.com/FjellOverflow/nordlys/commit/bf390c87ea9ad6dcefa2a35c0e637ef9530d008c))

## [2.1.1](https://github.com/FjellOverflow/nordlys/compare/v2.1.0...v2.1.1) (2025-02-25)

### Bug Fixes

- **seo:** link to canonical URLs with trailing slash ([2dbb430](https://github.com/FjellOverflow/nordlys/commit/2dbb4300d750e0aa49e04ed010e573146b18cc8e))

## [2.1.0](https://github.com/FjellOverflow/nordlys/compare/v2.0.3...v2.1.0) (2025-01-25)

### Features

- scrollable ToC ([7ea348d](https://github.com/FjellOverflow/nordlys/commit/7ea348d004900ae03f0a3199d69381330837d0c5)) by @patrickpiedad

### Bug Fixes

- add stylelint exception for tailwinds `@apply` ([cd95918](https://github.com/FjellOverflow/nordlys/commit/cd9591846a90c9b9aaf7252b454864b42c36d4c0))
- post og-image generation ([11df323](https://github.com/FjellOverflow/nordlys/commit/11df323c7418ceb5937b0d63ad5a68398c384788))

Big thanks to @patrickpiedad his much appreciated contribution to the project 🥳!

## [2.0.3](https://github.com/FjellOverflow/nordlys/compare/v2.0.2...v2.0.3) (2025-01-17)

### Bug Fixes

- remove public image referencing from docs post ([53bb078](https://github.com/FjellOverflow/nordlys/commit/53bb078b9b1d431a5258cd754f38a192ba11145e))

## [2.0.2](https://github.com/FjellOverflow/nordlys/compare/v2.0.1...v2.0.2) (2025-01-07)

### Bug Fixes

- date range entirely right in project preview ([1c3fdbf](https://github.com/FjellOverflow/nordlys/commit/1c3fdbf1a1117ee53f6bfc4aef9636f1aabd5f77))
- require `previewImage` and `opengraphImage`to always be image in content collections ([642e142](https://github.com/FjellOverflow/nordlys/commit/642e142706084514707f1b00e90bba9940b6d2da))

## [2.0.1](https://github.com/FjellOverflow/nordlys/compare/v2.0.0...v2.0.1) (2024-12-07)

### Bug Fixes

- exclude arbitrary pages from being indexed by pagefind ([c08dd1c](https://github.com/FjellOverflow/nordlys/commit/c08dd1c71eaa0d2f3c0e66914d6fa35d68231166))
- readd local image support to Project content schema ([194ce9c](https://github.com/FjellOverflow/nordlys/commit/194ce9c03d7c8fc46a1bdcb96f4474755b44a2a6))

## [2.0.0](https://github.com/FjellOverflow/nordlys/compare/v1.2.0...v2.0.0) (2024-12-06)

Although this is a new major release, there is no "actual" changes in terms of new features or looks, but only the migration to newly released Astro 5. This entails some smaller changes under the hood, mainly due to the new [Content Layer API](https://docs.astro.build/en/guides/upgrade-to/v5/#updating-existing-collections). For anyone migrating manually, notice that the `src/content` directory moved to `content` and the new/updated `content.config.ts`.

### ⚠ BREAKING CHANGES

- migrate to Astro 5 ([400d297](https://github.com/FjellOverflow/nordlys/commit/400d29756fed41591a8ffefdd8a9497070ccba83))

### Bug Fixes

- rewrite codeHeadersPlugin without postProcess shiki hook ([3fc4fe3](https://github.com/FjellOverflow/nordlys/commit/3fc4fe32e7fa1e44efbc066ecfbe83e87c8b56ff))

## [1.2.0](https://github.com/FjellOverflow/nordlys/compare/v1.1.2...v1.2.0) (2024-12-04)

### Features

- load og image logo from urlEncoded local SVG ([8fd1668](https://github.com/FjellOverflow/nordlys/commit/8fd16682540c3663a2ed79aab1d6c968811ceede)), closes [#2](https://github.com/FjellOverflow/nordlys/issues/2)

## [1.1.2](https://github.com/FjellOverflow/nordlys/compare/v1.1.1...v1.1.2) (2024-12-02)

### Bug Fixes

- inline cursive text overlaps into following text ([fc0184a](https://github.com/FjellOverflow/nordlys/commit/fc0184ab2f87aaa5e05bc73e180b5866f23c02bd))
- remove scrollbar styling to restore browser default ([dfa33f0](https://github.com/FjellOverflow/nordlys/commit/dfa33f0cdcc32e9946e608a5052f3f6c8c13d8f6)), closes [#5](https://github.com/FjellOverflow/nordlys/issues/5)

## [1.1.1](https://github.com/FjellOverflow/nordlys/compare/v1.1.0...v1.1.1) (2024-11-21)

### Bug Fixes

- hero background blur too wide on Opera ([a44b952](https://github.com/FjellOverflow/nordlys/commit/a44b9528b1c362dde7e6a05a15e09cd6c37ad7be))
- project preview images too wide on Safari & Firefox ([958cc3d](https://github.com/FjellOverflow/nordlys/commit/958cc3d7ba8824b6191e5992a07cb680a6b5ec9d))

## [1.1.0](https://github.com/FjellOverflow/nordlys/compare/v1.0.0...v1.1.0) (2024-11-19)

### Features

- optimize logo/favicon SVG ([4d9480b](https://github.com/FjellOverflow/nordlys/commit/4d9480b4110d2893b17490ff5864e8123c793781))

### Bug Fixes

- copy-code buttons wouldnt copy ([ec7d683](https://github.com/FjellOverflow/nordlys/commit/ec7d683069c9be27383bf3e97b12ab05aa78686a))

## [1.0.0](https://github.com/FjellOverflow/nordlys/compare/v0.2.5...v1.0.0) (2024-11-15)

The last couple of weeks I have been tweaking and improving this theme, dealt with accessibility and optimization with only few new features and changes to the outside appearance. For now I am satisfied and am both comfortable and excited to release **Nordlys 1.0.0**! As before, I am still happy and grateful for bug reports, feature requests or other contributions!

### Features

- **a11y:** hidden "Skip to main content" button for keyboard-tab navigation ([3f45765](https://github.com/FjellOverflow/nordlys/commit/3f45765147acd0cd31b34d6c51ff0eca6413f30f))
- optimized post/project preview images ([5bb6939](https://github.com/FjellOverflow/nordlys/commit/5bb69390df4913873e3a2548954280867e27f425))

### Bug Fixes

- **a11y:** Make copy code icon a `<button>` ([a4b231d](https://github.com/FjellOverflow/nordlys/commit/a4b231df695c285198d4197a200d2e47ac18954d))
- **a11y:** missing `id`s on Dropdown components ([d62949b](https://github.com/FjellOverflow/nordlys/commit/d62949b02077f792e9a8595ab11c0f1f22cacc2f))
- **a11y:** missing button `aria-label` ([a8c1dae](https://github.com/FjellOverflow/nordlys/commit/a8c1dae52f8ce52a495697626d8ca5f3c68763e8))
- **a11y:** proper `alt` descriptions on images ([b071f2c](https://github.com/FjellOverflow/nordlys/commit/b071f2cb8c3521500eac21d4d1abdd16067dbde4))
- small layout adjustments ([fd578b3](https://github.com/FjellOverflow/nordlys/commit/fd578b344d9922f5b6171254acdd2cf33be8d0f6))

## [0.2.5](https://github.com/FjellOverflow/nordlys/compare/v0.2.4...v0.2.5) (2024-11-14)

### Features

- **a11y:** aria-hidden on irrelevant icons ([93502d3](https://github.com/FjellOverflow/nordlys/commit/93502d33b3746aff00ab3167550d081544ec57ef))
- **a11y:** improve Dropdown ([7ee14b4](https://github.com/FjellOverflow/nordlys/commit/7ee14b4af7280b5a8c1b231b3cd71d8b3549cf57))
- **a11y:** improve MobileNavToggle ([b553868](https://github.com/FjellOverflow/nordlys/commit/b553868bebd27400d2ef9cb97ea423a7a5262a53))
- **a11y:** improve ModeToggle ([5780676](https://github.com/FjellOverflow/nordlys/commit/5780676773252a53c6e2e5f9e7c85a7590d4c053))
- **a11y:** improve ScrollToTop button ([331b2f9](https://github.com/FjellOverflow/nordlys/commit/331b2f95d3ed3c09ed702fed5efb7f86bd2956d8))
- use Astros `<Image>` component over `<img>` where possible ([3db3ce7](https://github.com/FjellOverflow/nordlys/commit/3db3ce7e36358453cf972c7f67cfbd4095963673))

### Bug Fixes

- `<script>` outside `<html>` ([7ee1991](https://github.com/FjellOverflow/nordlys/commit/7ee1991932e393a98beb0ca94325425c05926a41))
- various a11y ([9f1c64b](https://github.com/FjellOverflow/nordlys/commit/9f1c64b788ed52540365ba80fda8f6b2568b706d))

## [0.2.4](https://github.com/FjellOverflow/nordlys/compare/v0.2.3...v0.2.4) (2024-11-10)

### Features

- a11y improvements ([183dd8e](https://github.com/FjellOverflow/nordlys/commit/183dd8ec86ac48b7335d07a412ed0143001d3a1f))

## [0.2.3](https://github.com/FjellOverflow/nordlys/compare/v0.2.2...v0.2.3) (2024-11-08)

### Bug Fixes

- overflowing ToC ([219fd45](https://github.com/FjellOverflow/nordlys/commit/219fd457f75695f5be42b32ae2404b8a6cd50987))
- previous/next post buttons on bottom of page ([ceafaa9](https://github.com/FjellOverflow/nordlys/commit/ceafaa99305406dbbe74724845dccade742b825f))

## [0.2.2](https://github.com/FjellOverflow/nordlys/compare/v0.2.1...v0.2.2) (2024-10-30)

### Features

- preview images for posts ([3833533](https://github.com/FjellOverflow/nordlys/commit/383353337cf43d6d054b652586df9d274d0e21c3))

### Bug Fixes

- round images on small layouts ([29f8375](https://github.com/FjellOverflow/nordlys/commit/29f8375d6b4a3c60546cd61516955845f1b869a2))

## [0.2.1](https://github.com/FjellOverflow/nordlys/compare/v0.2.0...v0.2.1) (2024-10-27)

### Features

- global search ([bc0277e](https://github.com/FjellOverflow/nordlys/commit/bc0277e61adc9249750015224f5a6f4e7175359f))
- preview images for projects ([61c96a3](https://github.com/FjellOverflow/nordlys/commit/61c96a3520c36f8eb26f5d308450be05104a83e1))

### Bug Fixes

- size search icon in header bar correctly ([7dd9164](https://github.com/FjellOverflow/nordlys/commit/7dd91647626911194ba923550cd47c737d603c37))

## [0.2.0](https://github.com/FjellOverflow/nordlys/compare/v0.1.1...v0.2.0) (2024-10-24)

### ⚠ BREAKING CHANGES

- replace zoomableImage config with optional data-img-embed attribute

### Features

- replace zoomableImage config with optional data-img-embed attribute ([8bb423b](https://github.com/FjellOverflow/nordlys/commit/8bb423bc9049466288044a52d8900ee0f6e1e70d))

### Bug Fixes

- hero-img not zoomable ([cd5343c](https://github.com/FjellOverflow/nordlys/commit/cd5343c3010cc3cd1f4daf37dd57b8ea7f060a6e))
- inconsistent borders ([34003c3](https://github.com/FjellOverflow/nordlys/commit/34003c3ecb61a12a616ab097987a3ffe20298021))
- readd heading anchors when navigating between different posts ([911d97a](https://github.com/FjellOverflow/nordlys/commit/911d97a807e2b3513d9eb7a706559d705ee1fa1a))
- ToC border color ([c376377](https://github.com/FjellOverflow/nordlys/commit/c376377b62af211ef4a6116eba2a40b4a02f806e))
- ToC headings are `<li>`s, decreased spacing, removed bulletpoints ([3e53300](https://github.com/FjellOverflow/nordlys/commit/3e53300e9633478b08ca780471687cc40b1a931c))

## 0.1.1 (2024-10-23)

### Features

- opt-out for medium-zoom ([0af84ce](https://github.com/FjellOverflow/nordlys/commit/0af84cedeb71c2a6e6f1d27f10a26d3ac65bc924))
- show previous/next post buttons on bottom ([5272258](https://github.com/FjellOverflow/nordlys/commit/527225846a089ad35a0c207e0f5e7325e3a938d8))
- sticky aside, ToC hovering effect ([5ac6d00](https://github.com/FjellOverflow/nordlys/commit/5ac6d00cd9ff7c66318ac69d6aa6f2a1e6ec0fda))

### Bug Fixes

- mediumZoom only applies to main content ([9f01c8e](https://github.com/FjellOverflow/nordlys/commit/9f01c8ebcfd616440c6f204343066f662bc8e8e8))
- prevent FOUT ([22a868d](https://github.com/FjellOverflow/nordlys/commit/22a868d311a1e396caf6715c0fae207021929147))
