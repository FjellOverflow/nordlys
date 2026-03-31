declare module 'photoswipe-thumbs-plugin' {
  import type PhotoSwipeLightbox from 'photoswipe/lightbox'

  export default class PhotoSwipeThumbsPlugin {
    constructor(pswpInstance: PhotoSwipeLightbox)
    destroy: () => void
  }
}
