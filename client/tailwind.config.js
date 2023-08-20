/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      fontFamily:{
        custom:['CustomFont', 'sans-serif']
      },
      backgroundColor:{
        'vintage-white': '#F1F0E8',
        'vintage-tan': '#eee0c9',
        'vintage-blue': '#ADC4CE'
      },
      textColor:{
        'vintage-white': '#F1F0E8',
        'vintage-blue': '#ADC4CE'
      }
    },
  },
  plugins: [],
}

