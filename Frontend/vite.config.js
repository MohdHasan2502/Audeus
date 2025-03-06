import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimizeDeps: {
    include: ["pdfjs-dist/build/pdf.worker.min.js"],
  },
  define: {
    'process.env.SES_ENABLED': false,
  },
})
