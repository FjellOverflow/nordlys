declare module 'photoswipe-thumbs-plugin' {
  import type PhotoSwipeLightbox from 'photoswipe/lightbox'

  export default class PhotoSwipeThumbsPlugin {
    constructor(pswpInstance: PhotoSwipeLightbox)
    destroy: () => void
  }
}

declare module 'photoswipe-dynamic-caption-plugin' {
  import type PhotoSwipeLightbox from 'photoswipe/lightbox'

  interface PhotoSwipeDynamicCaptionPluginOptions {
    type: 'auto' | 'below' | 'aside'
    mobileLayoutBreakpoint: boolean
  }

  export default class PhotoSwipeThumbsPlugin {
    constructor(
      pswpInstance: PhotoSwipeLightbox,
      options?: PhotoSwipeDynamicCaptionPluginOptions
    )
  }
}
