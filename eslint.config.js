import jsEslint from '@eslint/js'
import astroEslint from 'eslint-plugin-astro'
import prettierEslint from 'eslint-plugin-prettier/recommended'
import tsEslint from 'typescript-eslint'

export default [
  prettierEslint,
  jsEslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...astroEslint.configs.recommended,
  ...astroEslint.configs['jsx-a11y-recommended'],
  {
    ignores: ['dist', 'node_modules', '.astro', 'public']
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_'
        }
      ]
    }
  }
]
