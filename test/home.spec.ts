import test, { expect } from '@playwright/test'

test('home', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('mode', 'dark'))
  await page.goto('/')
  await expect(page).toHaveScreenshot('home.png', { fullPage: true })
})
