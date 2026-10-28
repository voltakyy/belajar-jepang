import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative base keeps the build working both at the local root and under
  // https://voltakyy.github.io/belajar-jepang/.
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // @ts-expect-error vitest config
  test: {
    globals: true,
    environment: 'node',
  },
});
