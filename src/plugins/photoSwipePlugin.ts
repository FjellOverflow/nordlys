import PhotoSwipe from 'photoswipe'
import DynamicCaptionPlugin from 'photoswipe-dynamic-caption-plugin'
import Lightbox from 'photoswipe/lightbox'

export async function createPhotoSwipeGallery(element: HTMLElement) {
  if (!element) throw new Error('No element provided.')

  element.id = 'photoswipe-' + crypto.randomUUID()

  const lightbox = new Lightbox({
    pswpModule: PhotoSwipe,
    gallery: `#${element.id}`,
    children: 'a',
    padding: { top: 15, bottom: 95, left: 15, right: 15 },
    bgOpacity: 0.8,
    zoom: false
  })

  const ThumbnailsPlugin = (await import('photoswipe-thumbs-plugin')).default
  const thumbnailsPlugin = new ThumbnailsPlugin(lightbox)

  new DynamicCaptionPlugin(lightbox, {
    type: 'below'
  })

  lightbox.init()

  return () => {
    thumbnailsPlugin?.destroy()
    lightbox.destroy()
  }
}
