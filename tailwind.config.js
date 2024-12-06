/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-brand': '#613613',
        'lite-brand': '#4B382A'
      }
    },
  },
  plugins: []
}

