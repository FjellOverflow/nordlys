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

export async function createZoomableImage(image: HTMLImageElement) {
  if (!image) throw new Error('No image provided.')

  if (image.dataset.zoomInitialized !== undefined) return

  image.dataset.zoomInitialized = ''

  image.addEventListener('click', () => {
    const lightbox = new Lightbox({
      pswpModule: PhotoSwipe,
      dataSource: [
        {
          src: image.currentSrc || image.src,
          msrc: image.currentSrc || image.src,
          width: image.naturalWidth || image.width,
          height: image.naturalHeight || image.height,
          alt: image.alt,
          element: image.parentElement ?? image
        }
      ],
      padding: { top: 15, bottom: 15, left: 15, right: 15 },
      bgOpacity: 0.8,
      zoom: false
    })

    new DynamicCaptionPlugin(lightbox, {
      type: 'below'
    })

    lightbox.init()
    lightbox.loadAndOpen(0)
  })
}
