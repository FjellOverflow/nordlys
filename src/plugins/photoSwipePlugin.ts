import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'
import 'photoswipe-thumbs-plugin/style.css'
import 'photoswipe/style.css'

import PhotoSwipe from 'photoswipe'
import DynamicCaptionPlugin from 'photoswipe-dynamic-caption-plugin'
import type ThumbnailsPlugin from 'photoswipe-thumbs-plugin'
import Lightbox from 'photoswipe/lightbox'

async function generatePhotoSwipeGallery(
  options?: ConstructorParameters<typeof Lightbox>[0] & {
    withThumbnails?: boolean
  }
) {
  const lightbox = new Lightbox({
    pswpModule: PhotoSwipe,
    ...options
  })

  let thumbnailsPlugin: ThumbnailsPlugin | undefined

  if (options?.withThumbnails) {
    const ThumbnailsPlugin = (await import('photoswipe-thumbs-plugin')).default
    thumbnailsPlugin = new ThumbnailsPlugin(lightbox)
  }

  new DynamicCaptionPlugin(lightbox, {
    type: 'below'
  })

  lightbox.init()

  return () => {
    thumbnailsPlugin?.destroy()
    lightbox.destroy()
  }
}

export async function createPhotoSwipeGallery(element: HTMLElement) {
  if (!element) throw new Error('No element provided.')

  element.id = 'photoswipe-' + crypto.randomUUID()

  return await generatePhotoSwipeGallery({
    padding: { top: 15, bottom: 95, left: 15, right: 15 },
    bgOpacity: 0.8,
    zoom: false,
    gallery: `#${element.id}`,
    children: 'a',
    withThumbnails: true
  })
}
