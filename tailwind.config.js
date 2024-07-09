/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#76a58a',
        'primary': '#153e26',
        'info': '#0075A7',
        'success': '#4CAF50',
        'warning': '#FFC107',
        'dark': '#001005',
        'light': '#F5F5F7',
      }
    },
  },
  plugins: [],
}

