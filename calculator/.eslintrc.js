module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: "off",
    "comma-dangle": "off",
    "object-curly-newline": "off",
  },
};
