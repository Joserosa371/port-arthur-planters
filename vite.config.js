import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel will serve from this folder
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3000
  },
  base: '/', // ✅ Ensures correct asset paths for Vercel
});
