/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1366px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      keyframes: {
        glow: {
          '0%': { backgroundColor: '#ff9a9e' },
          '25%': { backgroundColor: '#fad0c4' },
          '50%': { backgroundColor: '#fbc2eb' },
          '75%': { backgroundColor: '#a18cd1' },
          '100%': { backgroundColor: '#ff9a9e' },
        },
      },
      animation: {
        glow: 'glow 4s infinite',
      },
    },
  },
  plugins: [],
}