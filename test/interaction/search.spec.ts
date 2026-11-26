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

    await expect(resultsList.locator('a[href^="/projects/"]')).toBeVisible()
  })

  test('searching for non-existent item', async () => {
    await searchInput.fill('saf')

    await expect(resultsList.locator('a')).toHaveCount(0)
    await expect(resultsHeader).toContainText('No Results')
  })

  test('results of a superseded query are discarded', async ({ page }) => {
    await page.waitForFunction(() => typeof window.pagefind !== 'undefined')
    await page.evaluate(() => {
      const { search } = window.pagefind
      let calls = 0

      window.pagefind = {
        search: async (query) => {
          const delay = calls++ === 0 ? 500 : 0
          const response = await search(query)
          await new Promise((resolve) => setTimeout(resolve, delay))
          return response
        }
      }
    })

    await searchInput.fill('Syntax Highlighting')
    await searchInput.fill('saf')
    await page.waitForTimeout(1000)

    await expect(resultsHeader).toContainText('No Results')
    await expect(resultsList.locator('a')).toHaveCount(0)
  })

  test('results keep the pagefind rank order', async ({ page }) => {
    const query = 'nordlys'

    await page.waitForFunction(() => typeof window.pagefind !== 'undefined')
    const rankedUrls = await page.evaluate(async (query) => {
      type Result = { data: () => Promise<{ url: string }> }
      const { search } = window.pagefind

      window.pagefind = {
        search: async (query) => {
          const results = (await search(query)).results as Result[]

          return {
            results: results.map((result, rank) => ({
              data: async () => {
                const delay = (results.length - rank) * 50
                await new Promise((resolve) => setTimeout(resolve, delay))
                return result.data()
              }
            }))
          }
        }
      }

      const results = (await search(query)).results as Result[]
      return Promise.all(
        results.slice(0, 15).map(async (r) => (await r.data()).url)
      )
    }, query)

    expect(rankedUrls.length).toBeGreaterThan(1)

    await searchInput.fill(query)

    await expect
      .poll(() =>
        resultsList
          .locator('a')
          .evaluateAll((links) => links.map((a) => a.getAttribute('href')))
      )
      .toEqual(rankedUrls)
  })

  test('clear button', async () => {
    searchInput.fill('test')

    await expect(clearButton).toBeVisible()

    await clearButton.click()

    await expect(searchInput).toHaveValue('')
    await expect(clearButton).not.toBeVisible()
  })
})
