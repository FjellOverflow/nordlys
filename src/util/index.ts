import type { HTMLAttributes } from 'astro/types'

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

const isLocalAsset = (
  image: string | HTMLAttributes<'img'>
): image is HTMLAttributes<'img'> => typeof image !== 'string'

export const resolveOgImageUrl = (image: string | HTMLAttributes<'img'>) => {
  return isLocalAsset(image) ? image.src : image
}
