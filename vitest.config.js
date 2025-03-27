import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use Jest-like global functions (e.g., `test`, `expect`)
    environment: 'jsdom', // Simulate browser environment
    setupFiles: './src/test/setup.js', // Setup file for test utilities
  },
});
