import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pdfjs-dist': path.resolve(__dirname, 'node_modules/pdfjs-dist/webpack/legacy/build'),
    },
  },
  optimizeDeps: {
    include: ['pdfjs-dist/webpack/legacy/build/pdf.worker.min.js'],
  },
  build: {
    rollupOptions: {
      external: ['pdfjs-dist'],
      input: {
        main: path.resolve(__dirname, 'index.html'),
        pdfWorker: 'pdfjs-dist/webpack/legacy/build/pdf.worker.min.js',
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true, // Ensures compatibility with pdfjs-dist
    },
  },
  define: {
    'process.env.SES_ENABLED': false,
    'process.env': {}, // Prevents process.env-related errors
  },
});
