import test, { expect } from '@playwright/test'

export function snapshotTest(route: `/${string}`) {
  testInMode(route, 'light')
  testInMode(route, 'dark')
}

async function testInMode(route: `/${string}`, mode: 'light' | 'dark') {
  const testTitle = `${generateTestTitle(route)}_${mode}`

  const allImagesLoaded = () =>
    Array.from(document.querySelectorAll('img')).every(
      (img) => (img.currentSrc !== '' && img.complete) || !img.src
    )

  test(testTitle, async ({ page }) => {
    await page.addInitScript((m) => localStorage.setItem('mode', m), mode)
    await page.goto(route)
    await page.locator('footer').scrollIntoViewIfNeeded()
    await page.waitForFunction(allImagesLoaded)
    await expect(page).toHaveScreenshot(`${testTitle}.png`, {
      fullPage: true
    })
  })
}

function generateTestTitle(route: string) {
  return route.toLowerCase().replaceAll('/', '_')
}
