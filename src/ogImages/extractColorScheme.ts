import fs from 'fs'

const SCHEMES_FILE = './src/style/color-schemes.css'

const lightRegex = (scheme: string) =>
  new RegExp(
    `\\.${scheme}\\s*\\{\\s*--accent:\\s*([\\d\\s,]+);\\s*--accent-bg:\\s*([\\d\\s,]+);`
  )

const darkRegex = (scheme: string) =>
  new RegExp(
    `\\.${scheme}\\s*{(?:[^{}]*{[^{}]*})*[^{}]*\\[data-mode=['"]dark['"]\\]\\s*{[^{}]*--accent:\\s*([\\d\\s,]+);[^{}]*--accent-bg:\\s*([\\d\\s,]+);`
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

export default function extractSchemeColors(colorScheme: string) {
  const scheme = colorScheme.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')

  const css = fs.readFileSync(SCHEMES_FILE, 'utf-8')

  const light = extract(lightRegex(scheme).exec(css))
  const dark = extract(darkRegex(scheme).exec(css))

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
