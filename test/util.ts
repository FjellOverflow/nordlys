import test, { expect } from '@playwright/test'

export function snapshotTest(route: `/${string}`) {
  const testTitle = generateTestTitle(route)

  test(testTitle, async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('mode', 'dark'))
    await page.goto(route)
    await expect(page).toHaveScreenshot(`${testTitle}_dark.png`, {
      fullPage: true
    })

    await page.addInitScript(() => localStorage.setItem('mode', 'light'))
    await page.goto(route)
    await expect(page).toHaveScreenshot(`${testTitle}_light.png`, {
      fullPage: true
    })
  })
}

function generateTestTitle(route: string) {
  return route.toLowerCase().replaceAll('/', '_')
}
