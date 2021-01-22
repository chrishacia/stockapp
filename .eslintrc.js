module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/prefer-stateless-function": 0,
    "no-unused-vars": "warn",
    "react/jsx-indent-props": "warn",
    "react/jsx-indent-props": "warn",
    "react/destructuring-assignment": "warn",
    "no-multiple-empty-lines": "warn",
    "react/no-unused-state": "warn",
    "class-methods-use-this": "warn",
    "no-shadow": 0,
    "no-console": "off"
  },
};
