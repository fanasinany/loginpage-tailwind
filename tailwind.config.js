/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'body': 'Poppins',
      'sans': 'Poppins',
    },
    extend: {},
    screens: {
      'md': { 'max': '790px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '710px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

