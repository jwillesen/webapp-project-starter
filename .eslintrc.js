module.exports = {
  env: {
    'browser': true,
    'node': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: 'standard',
  rules: {
    "comma-dangle": ["error", "always-multiline"],

    "no-var": ["error"],
    "prefer-const": ["error"],

    "no-alert": ["warn"],
    "no-console": ["warn"],
    "no-debugger": ["warn"],
  },
}
