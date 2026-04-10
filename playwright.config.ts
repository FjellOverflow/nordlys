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
    // test all width breakpoints: https://tailwindcss.com/docs/responsive-design
    {
      name: '2xl', // 2xl >= 1536px
      use: { browserName: 'chromium', viewport: { height: 1080, width: 1920 } }
    },
    {
      name: 'xl', // 1280px <= xl <= 1536px
      use: { browserName: 'chromium', viewport: { height: 768, width: 1366 } }
    },
    {
      name: 'lg', // 1024px <= lg <= 1280px
      use: { browserName: 'chromium', viewport: { height: 1376, width: 1032 } }
    },
    {
      name: 'md', // 768px <= md <= 1024px
      use: { browserName: 'chromium', viewport: { height: 1210, width: 834 } }
    },
    {
      name: 'sm', // 640px <= sm <= 768px
      use: { browserName: 'chromium', viewport: { height: 378, width: 672 } }
    },
    {
      name: 'default', // default <= 640px
      use: { browserName: 'chromium', viewport: { height: 780, width: 360 } }
    }
  ]
})
