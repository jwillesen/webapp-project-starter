module.exports = {
  env: {
    'browser': true,
    'node': true,
  },
  plugins: ['react'],
  extends: ['standard', 'plugin:react/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],

    "no-var": ["error"],
    "prefer-const": ["error"],

    "no-alert": ["warn"],
    "no-console": ["warn"],
    "no-debugger": ["warn"],
  },
}
