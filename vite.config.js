import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import eslint from 'vite-plugin-eslint';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    react()
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      configs: path.resolve(__dirname, './src/configs'),
      views: path.resolve(__dirname, './src/views'),
      statics: path.resolve(__dirname, './src/statics'),
      services: path.resolve(__dirname, './src/services'),
      utils: path.resolve(__dirname, './src/utils'),
      hooks: path.resolve(__dirname, './src/hooks'),
      constants: path.resolve(__dirname, './src/constants'),
      stores: path.resolve(__dirname, './src/stores'),
      assets: path.resolve(__dirname, './src/assets')
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});
