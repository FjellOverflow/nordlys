declare module 'photoswipe-thumbs-plugin' {
  import type PhotoSwipeLightbox from 'photoswipe/lightbox'

  export interface ThumbsOptions {
    // approximate options — adjust if the plugin exposes others
    thumbnailWidth?: number
    thumbnailHeight?: number
    position?: 'top' | 'bottom' | 'left' | 'right'
    margin?: number
  }

  export default class PhotoSwipeThumbs {
    constructor(pswpInstance: PhotoSwipeLightbox)
    destroy: () => void
  }
}
