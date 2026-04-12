import test, { expect, type Locator } from '@playwright/test'

test.describe('interaction - components', () => {
  let isMobile = false

  test.beforeEach(async ({ page, viewport }) => {
    await page.goto('/posts')

    isMobile = (viewport?.width ?? 0) < 640
  })

  test('dropdown', async ({ page }) => {
    let dropdown: Locator

    if (isMobile) {
      await page.locator('mobile-nav-toggle button').click()
      dropdown = page.locator('#mobile-nav dropdown-parent').first()
    } else {
      dropdown = page.locator('dropdown-parent').first()
    }
    const button = dropdown.locator('button')
    const menu = dropdown.locator('[role="menu"]')

    await expect(menu).toBeHidden()
    await expect(button).toHaveAttribute('aria-expanded', 'false')

    await button.click()
    await expect(menu).toBeVisible()
    await expect(button).toHaveAttribute('aria-expanded', 'true')
    await expect(menu.locator('a[href="/"]')).toHaveText('Landing page')

    await button.click()

    await expect(menu).toBeHidden()
    await expect(button).toHaveAttribute('aria-expanded', 'false')

    await button.click()
    await page.locator('main').click({ position: { x: 10, y: 10 } })

    await expect(menu).toBeHidden()
    await expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  test('mode toggle', async ({ page }) => {
    const html = page.locator('html')
    const button = page
      .locator('dark-light-toggle button')
      .filter({ visible: true })
    const initialMode = await html.getAttribute('data-mode')
    const newMode = initialMode === 'light' ? 'dark' : 'light'

    await button.click()

    await expect(html).toHaveAttribute('data-mode', newMode)
    await expect(button).toHaveAttribute('aria-label', newMode)

    await button.click()

    await expect(html).toHaveAttribute('data-mode', initialMode!)
    await expect(button).toHaveAttribute('aria-label', initialMode!)
  })
})
