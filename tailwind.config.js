/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lite-brand': '#B7A99A',
        'yellow': '#FEA910'
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif'],
      },
      screens: {
        "max-sm": { max: '500px' },
        'md-lg': { min: '500px', max: '1200px' },
      }
    },
  },
  plugins: []
}

