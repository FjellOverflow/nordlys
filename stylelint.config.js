/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-recommended', 'stylelint-config-html'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ],
    'at-rule-no-deprecated': null
  }
}
