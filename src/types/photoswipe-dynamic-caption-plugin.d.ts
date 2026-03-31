declare module 'photoswipe-dynamic-caption-plugin' {
  import type PhotoSwipeLightbox from 'photoswipe/lightbox'

  interface PhotoSwipeDynamicCaptionPluginOptions {
    type: 'auto' | 'below' | 'aside'
  }

  export default class PhotoSwipeThumbsPlugin {
    constructor(
      pswpInstance: PhotoSwipeLightbox,
      options?: PhotoSwipeDynamicCaptionPluginOptions
    )
  }
}
