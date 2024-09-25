import jsEslint from '@eslint/js'
import astroEslint from 'eslint-plugin-astro'
import prettierEslint from 'eslint-plugin-prettier/recommended'
import tsEslint from 'typescript-eslint'

import globals from 'globals'

export default [
  prettierEslint,
  jsEslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...astroEslint.configs.recommended,
  ...astroEslint.configs['jsx-a11y-recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['tailwind.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  },
  {
    ignores: ['dist', 'node_modules', '.astro']
  }
]
