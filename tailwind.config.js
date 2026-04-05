/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- هذا السطر مهم
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};