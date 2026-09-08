import type { RequireAtLeastOne } from '@/types'
import { getImage } from 'astro:assets'

export const isLocalImage = (
  image: string | ImageMetadata
): image is ImageMetadata => typeof image !== 'string'

const maxImageWidth = 2000

export async function optimizeImage(
  src: Parameters<typeof getImage>[0]['src']
) {
  const original = await getImage({ src, inferSize: true })
  const originalHeight = original.attributes.height as number
  const originalWidth = original.attributes.width as number

  if (originalWidth <= maxImageWidth)
    return {
      src: original.src,
      height: originalHeight,
      width: originalWidth,
      originalHeight,
      originalWidth
    }

  const width = maxImageWidth
  const height = Math.round((width / originalWidth) * originalHeight)

  const capped = await getImage({ src, width, height, format: 'webp' })

  return {
    src: capped.src,
    height,
    width,
    originalHeight,
    originalWidth
  }
}

export async function downscaleImage(
  src: Parameters<typeof getImage>[0]['src'],
  {
    height,
    width
  }: RequireAtLeastOne<{ height?: number; width?: number }, 'height' | 'width'>
) {
  const optimizedImage = await optimizeImage(src)

  const downscaledHeight = height
    ? height
    : Math.round(
        ((width as number) / optimizedImage.originalWidth) *
          optimizedImage.originalHeight
      )

  const downscaledWidth = width
    ? width
    : Math.round(
        ((height as number) / optimizedImage.originalHeight) *
          optimizedImage.originalWidth
      )

  const downscaledImage = await getImage({
    src,
    height: downscaledHeight,
    width: downscaledWidth
  })

  return {
    optimizedImage,
    downscaledImage: {
      src: downscaledImage.src,
      height: downscaledHeight,
      width: downscaledWidth
    }
  }
}
