import fs from 'fs'

const THEMES_FILE = './src/style/themes.css'

const lightRegex = (theme: string) =>
  new RegExp(
    `\\.${theme}\\s*\\{\\s*--accent:\\s*([\\d\\s,]+);\\s*--accent-bg:\\s*([\\d\\s,]+);`
  )

const darkRegex = (theme: string) =>
  new RegExp(
    `\\.${theme}\\s*{(?:[^{}]*{[^{}]*})*[^{}]*\\[data-theme=['"]dark['"]\\]\\s*{[^{}]*--accent:\\s*([\\d\\s,]+);[^{}]*--accent-bg:\\s*([\\d\\s,]+);`
  )

const toRGB = (vals: string) => `rgb(${vals.replaceAll(' ', '')})`

const extract = (match: RegExpExecArray | null) => {
  if (match && match.length > 2) {
    const accent = `[${toRGB(match[1])}]`
    const bg = `[${toRGB(match[2])}]`
    return { accent, bg }
  }
  return {}
}

export default function extractThemeColors(colorTheme: string) {
  const theme = colorTheme.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')

  const css = fs.readFileSync(THEMES_FILE, 'utf-8')

  const light = extract(lightRegex(theme).exec(css))
  const dark = extract(darkRegex(theme).exec(css))

  return {
    light: {
      accent: 'black',
      bg: 'white',
      ...light
    },
    dark: {
      accent: 'white',
      bg: 'black',
      ...dark
    }
  }
}
