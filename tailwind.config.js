/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: '#1F4E79', light: '#2E75B6', dark: '#153657' },
        gold:  { DEFAULT: '#B8860B', light: '#D4A017', dark: '#8B6508' },
        slate: { DEFAULT: '#2C2C2C' },
        mist:  { DEFAULT: '#F5F7FA' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
