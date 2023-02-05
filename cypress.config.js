// eslint-disable-next-line import/no-commonjs
const {defineConfig} = require('cypress');

// eslint-disable-next-line import/no-commonjs
module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: '**/*.e2e.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
