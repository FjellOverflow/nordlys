import test, { expect, type Locator } from '@playwright/test'

test.describe('interaction - /search', () => {
  let searchInput: Locator
  let clearButton: Locator
  let resultsHeader: Locator
  let resultsList: Locator

  test.beforeEach(async ({ page }) => {
    await page.goto('/search')

    searchInput = page.locator('input[placeholder="Type to search"]')
    clearButton = page.locator('#search-clear')
    resultsHeader = page.locator('#results-heading')
    resultsList = page.locator('#results-list')
  })

  test('pagefind loaded', async ({ page }) => {
    await page.waitForFunction(() => typeof window.pagefind !== 'undefined')
  })

  test('elements present', async () => {
    await expect(searchInput).toBeVisible()
    await expect(resultsHeader).toBeVisible()
    await expect(resultsList).toBeAttached()
    await expect(clearButton).not.toBeVisible()
  })

  test('searching for posts', async () => {
    await searchInput.fill('Syntax Highlighting')

    await expect(
      resultsList.locator('a[href*="syntax-highlighting"]')
    ).toBeVisible()
  })

  test('searching for projects', async () => {
    await searchInput.fill('Nordly Astro blog theme')

    await expect(resultsList.locator('a[href*="nordlys"]')).toBeVisible()
  })

  test('searching for non-existent item', async () => {
    await searchInput.fill('saf')

    await expect(resultsList.locator('a')).toHaveCount(0)
    await expect(resultsHeader).toContainText('No Results')
  })

  test('clear button', async () => {
    searchInput.fill('test')

    await expect(clearButton).toBeVisible()

    await clearButton.click()

    await expect(searchInput).toHaveValue('')
    await expect(clearButton).not.toBeVisible()
  })
})
