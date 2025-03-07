import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'pdfjs-dist': 'pdfjs-dist/webpack', // Fixes the eval() issue
    },
  },
  optimizeDeps: {
    include: ['pdfjs-dist/build/pdf.worker.min.js'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Ensures compatibility with pdfjs-dist
    },
  },
  define: {
    'process.env.SES_ENABLED': false,
    'process.env': {}, // Prevents process.env-related errors
  },
});
