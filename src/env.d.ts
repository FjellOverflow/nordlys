/// <reference path="../.astro/types.d.ts" />

interface Window {
  theme: {
    setTheme: (theme: 'dark' | 'light') => void
    getTheme: () => 'dark' | 'light'
    getSystemTheme: () => 'light' | 'dark'
    getDefaultTheme: () => 'dark' | 'light'
  }
}
