/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-recommended', 'stylelint-config-html'],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-no-deprecated': null,
    'nesting-selector-no-missing-scoping-root': null
  }
}
