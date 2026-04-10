import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'test',
  snapshotDir: 'test/screenshots',
  updateSnapshots: 'none',
  outputDir: 'test/.results',
  webServer: {
    command: 'pnpm preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI
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
