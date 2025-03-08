import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pdfjs-dist': path.resolve(__dirname, 'node_modules/pdfjs-dist'),
    },
  },
  optimizeDeps: {
    include: ['pdfjs-dist/build/pdf.worker.min.js'],
  },
  build: {
    rollupOptions: {
      external: ['pdfjs-dist'],
      output: {
        manualChunks: {
          worker: ['pdfjs-dist/build/pdf.worker.min.js'],
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  define: {
    'process.env.SES_ENABLED': false,
    'process.env': {},
  },
});
