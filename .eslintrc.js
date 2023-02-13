// eslint-disable-next-line import/no-commonjs
module.exports = {
  parser: '@babel/eslint-parser',
  env:
  {
    node: true,
    es6: true,
    browser: true,
    // mocha: true
  },
  parserOptions: {sourceType: 'module'},
  settings: {
    react: {version: 'detect'},
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    './src/eslint-rules/react.js',
    './src/eslint-rules/es6.js',
    './src/eslint-rules/imports.js',
  ],
  plugins: [
    'html',
    'import',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  ignorePatterns: [
    'vite.config.js',
  ],
  overrides: [
    {files: ['src/**/*.ts', 'src/**/*.tsx']}
  ],
  rules: {
    'max-len': ['error', {
      code: 180,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true
    }],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'never'],
    'react/prop-types': 0,
    'no-prototype-builtins': 0,
    'linebreak-style': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/no-cycle': 0,
    'object-curly-newline': ['error', {
      ImportDeclaration: {
        multiline: true,
        minProperties: 4
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 3
      }
    }],
    'react/function-component-definition': [2, {namedComponents: 'arrow-function'}],
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-autofocus': 0,
    'no-unused-expressions': [2, {allowShortCircuit: true}],
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
    'react/jsx-no-constructed-context-values': 0,
    'no-restricted-properties': 0,
    'prefer-exponentiation-operator': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-irregular-whitespace': 0,
    'default-param-last': 0,
    'import/no-unresolved': 0,
  }
};
