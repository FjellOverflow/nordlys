import test, { expect } from '@playwright/test'

test.describe('interaction - /tools', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tools')
  })

  test('tool groups and buttons present', async ({ page }) => {
    await expect(page.locator('tool-group')).not.toHaveCount(0)
    await expect(page.locator('tool-group button')).not.toHaveCount(0)
  })

  test('clicking tool shows details', async ({ page }) => {
    const firstGroup = page.locator('tool-group').first()
    const firstButton = firstGroup.locator('button').first()
    const detailsTitle = firstGroup.locator('tool-details-title')
    const detailsDescription = firstGroup.locator('tool-details-description')

    await expect(firstButton).toHaveAttribute('data-active', 'false')

    const expectedTitle = await firstButton.getAttribute('data-title')
    const expectedDescription =
      await firstButton.getAttribute('data-description')

    await firstButton.click()

    await expect(firstButton).toHaveAttribute('data-active', 'true')
    await expect(detailsTitle).toHaveText(expectedTitle!)
    await expect(detailsDescription).toHaveText(expectedDescription!)
  })

  test('clicking active tool closes details', async ({ page }) => {
    const firstGroup = page.locator('tool-group').first()
    const firstButton = firstGroup.locator('button').first()

    await firstButton.click()
    await expect(firstButton).toHaveAttribute('data-active', 'true')

    await firstButton.click()
    await expect(firstButton).toHaveAttribute('data-active', 'false')
  })

  test('clicking tool in another group closes previous', async ({ page }) => {
    const firstGroup = page.locator('tool-group').nth(0)
    const secondGroup = page.locator('tool-group').nth(1)
    const firstButton = firstGroup.locator('button').first()
    const secondButton = secondGroup.locator('button').first()

    await firstButton.click()
    await expect(firstButton).toHaveAttribute('data-active', 'true')

    await secondButton.click()
    await expect(secondButton).toHaveAttribute('data-active', 'true')
    await expect(firstButton).toHaveAttribute('data-active', 'false')
  })
})
