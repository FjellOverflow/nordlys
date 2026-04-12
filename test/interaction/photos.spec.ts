import test, { expect } from '@playwright/test'

test.describe('interaction - photo gallery', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/photos/aurora-borealis')
  })

  test('gallery', async ({ page }) => {
    await expect(page.locator('photoswipe-gallery')).toBeAttached()
    await expect(
      page.locator('photoswipe-gallery a[data-pswp-width]')
    ).not.toHaveCount(0)
  })

  test('lightbox', async ({ page }) => {
    const firstImage = page.locator('photoswipe-gallery a').first()
    const lightbox = page.locator('img[class="pswp__img"]').first()
    const caption = page.locator('.pswp__dynamic-caption').first()
    const thumbnails = page.locator('.pswp__thumbs-wrapper')

    await firstImage.click()

    await expect(lightbox).toBeVisible()
    await expect(caption).toBeVisible()
    await expect(thumbnails).toBeVisible()

    await page.locator('.pswp__button--close').first().click()

    await expect(lightbox).not.toBeVisible()
    await expect(caption).not.toBeVisible()
    await expect(thumbnails).not.toBeVisible()
  })
})
