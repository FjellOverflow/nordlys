import { getImage } from 'astro:assets'
import type { RequireAtLeastOne } from 'type-fest'

export const isLocalImage = (
  image: string | ImageMetadata
): image is ImageMetadata => typeof image !== 'string'

export async function optimizeImage(
  src: Parameters<typeof getImage>[0]['src']
) {
  const original = await getImage({ src, inferSize: true })
  const originalHeight = original.attributes.height as number
  const originalWidth = original.attributes.width as number

  return {
    src: original.src,
    height: originalHeight,
    width: originalWidth
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
        ((width as number) / optimizedImage.width) * optimizedImage.height
      )

  const downscaledWidth = width
    ? width
    : Math.round(
        ((height as number) / optimizedImage.height) * optimizedImage.width
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
