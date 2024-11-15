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

export const isLocalAsset = (
  image: string | ImageMetadata
): image is ImageMetadata => typeof image !== 'string'

export const resolveImageUrl = (image: string | ImageMetadata) => {
  return isLocalAsset(image) ? image.src : image
}

export const isAbsolute = (url: string) =>
  url.indexOf('http://') === 0 || url.indexOf('https://') === 0

export const generateItemId = (base: string) =>
  (base + Math.random().toString(16).slice(2)).replaceAll(' ', '').toLowerCase()
