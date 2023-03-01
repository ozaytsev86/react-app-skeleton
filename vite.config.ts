import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import {configDefaults} from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    tsconfigPaths(),
    react()
  ],
  server: {
    hmr: {
      overlay: false
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul', // or 'c8'
      reportsDirectory: './coverage',
      exclude: [
        ...configDefaults.exclude,
        'src/test/*',
        'src/configs/*'
      ]
    },
  },
});
