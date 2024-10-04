/// <reference path="../.astro/types.d.ts" />

interface Window {
  mode: {
    setMode: (theme: 'dark' | 'light') => void
    getMode: () => 'dark' | 'light'
  }
}
