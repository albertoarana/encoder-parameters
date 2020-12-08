module.exports = {
  "extends": [
    "prettier",
    "plugin:prettier/recommended",
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "globals": {
    "page": true,
    "browser": true,
    "context": true,
    "jestPuppeteer": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "babel",
    "prettier",
    "react"
  ],
  "rules": {
    "valid-jsdoc": 0,
    "no-var": 0,
    "max-len": 0,
    "react/no-did-mount-set-state": 0,
    "react/no-multi-comp": 0,
    "prefer-spread": 1,
    "prefer-template": 1,
    "prettier/prettier": "error",
    "quote-props": 1,
    "spaced-comment": 1,
    "max-params": 0,
    "no-multiple-empty-lines": 1,
    "no-process-env": 0,
    "no-inline-comments": 0,
    "no-invalid-this": 0,
    "no-unused-expressions": 0,
    "camelcase": 0,
    "consistent-return": 0,
    "comma-dangle": 1
  },
};
