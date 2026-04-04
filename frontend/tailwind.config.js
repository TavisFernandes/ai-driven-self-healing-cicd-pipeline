/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d4af37',
          bright: '#f1d592',
          dark: '#b8962e',
        },
        aurum: {
          bg: '#050505',
          card: 'rgba(18, 18, 18, 0.72)',
        },
        dark: {
          DEFAULT: '#050505',
          card: '#121212',
          lighter: '#141414',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
