export const toDateString = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

export const toMonthString = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: undefined
  })

export const isAbsoluteUrl = (url: string) =>
  url.indexOf('http://') === 0 || url.indexOf('https://') === 0

export const generateElementId = (base: string) =>
  `${base}-${crypto.randomUUID()}`
