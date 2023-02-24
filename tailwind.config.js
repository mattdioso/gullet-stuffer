/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      'Phosphate': ['"Phosphate"', 'sans-serif']
    },
    extend: {
      animation: {
        fadeLeft: 'fadeLeft 5s ease-in-out'
      },
      keyframes: {
        fadeLeft: {
          '0%': {
            opacity: 0, transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: 1, transform: 'translateX(0)'
          }
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
