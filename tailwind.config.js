/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const cardClass = plugin(function({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)'
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d'
    },
    '.perspective': {
      perspective: '1000px'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    }
  });
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: {
      'Phosphate': ['"Phosphate"', 'sans-serif'],
      'PhosphateRR': ['"Phosphate RR Solid"', 'sans-serif'],
      'KCBold': ['"KC Leisure Park Bold"'],
      'KCThin': ['"KC Leisure Park Thin"'],
      'OpenSansReg': ['"OpenSans Reg"'],
      'OpenSansBold': ['"OpenSans Bold"'],
      'OpenSansMed': ['"OpenSans Medium"'],
      'OpenSansCondensed': ['"OpenSans Condensed Reg"'],
      'OpenSansCondensedBold': ['"OpenSans Condensed Bold"'],
      'OpenSansCondensedMed': ['"OpenSans Condensed Medium"'],
      'OpenSansSemiReg': ['"OpenSans SemiCondensed Reg"'],
      'OpenSansSemiBold': ['"OpenSans SemiCondensed Bold"'],
      'OpenSansSemiMed': ['"OpenSans SemiCondensed Medium"']
    },
    extend: {
      gridTemplateColumns: {
        'hof': 'repeat(auto-fit, minmax(300px, 1fr))'
      },
      animation: {
        fadeLeft: 'fadeLeft 5s ease-in-out',
        frontFlipped: 'frontFlipped 2s',
        backFlipped: 'backFlipped 2s',
        'open-menu': 'open-menu 0.5s ease-in-out forwards'
      },
      keyframes: {
        fadeLeft: {
          '0%': {
            opacity: 0, transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: 1, transform: 'translateX(0)'
          }
        },
        frontFlipped: {
          '0%': {
            transform: 'rotateY(180deg)'
          },
          '100%': {
            transform: 'rotateY(0deg)'
          }
        },
        backFlipped: {
          '0%': {
            transform: 'rotateY(0deg)'
          },
          '100%': {
            transform: 'rotateY(180deg)'
          }
        },
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' }
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    cardClass,
    plugin(function({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'KC Leisure Park Bold',
          src: '/src/fonts/KCLeisurePark-Bold.otf'
        }
      })
    }),
    plugin(function({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'KC Leisure Park Thin',
          src: '/src/fonts/KCLeisurePark-Thin.otf'
        }
      })
    })
  ],
}
