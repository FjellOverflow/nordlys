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
    await page.locator('photoswipe-gallery a').first().click()

    await expect(page.locator('img[class="pswp__img"]')).toBeVisible()
    await expect(page.locator('.pswp__thumbs-wrapper')).toBeVisible()

    await page.locator('.pswp__button--close').first().click()

    await expect(page.locator('img[class="pswp__img"]')).not.toBeVisible()
    await expect(page.locator('.pswp__thumbs-wrapper')).not.toBeVisible()

    await page.locator('photoswipe-gallery a').first().click()
    await page.locator('main').click({ position: { x: 10, y: 10 } })

    await expect(page.locator('img[class="pswp__img"]')).not.toBeVisible()
    await expect(page.locator('.pswp__thumbs-wrapper')).not.toBeVisible()
  })
})
