import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'test',
  snapshotDir: 'test/snapshots',
  updateSnapshots: 'none',
  outputDir: 'test/.results',
  webServer: {
    command: 'pnpm preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI
  },
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.02 }
  },
  use: {
    baseURL: 'http://localhost:4321'
  },
  projects: [
    {
      name: 'default',
      use: { browserName: 'chromium', viewport: { height: 1080, width: 1920 } }
    }
  ]
})
