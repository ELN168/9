/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        linegreen: {
          DEFAULT: '#06C755',
          hover: '#05B34C',
        },
        mapgreen: {
          DEFAULT: '#059669',
          hover: '#047857',
          dark: '#065F46',
        },
        fbblue: {
          DEFAULT: '#1877F2',
          hover: '#0C63D4',
        },
        beige: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F4ECE1',
          300: '#E8DFC8',
          400: '#D5C4AC',
        },
        gold: {
          300: '#F3E5AB',
          400: '#E6CA65',
          500: '#D4AF37',
          600: '#AA820A',
        },
        bronze: {
          300: '#D8B885',
          400: '#C59B58',
          500: '#A67C43',
          600: '#8A622E',
          700: '#68481D',
        },
        charcoal: {
          950: '#0F0E0C',
          900: '#181614',
          800: '#2A2622',
          700: '#423D37',
          600: '#615A52',
          500: '#7E756B',
          400: '#9C9488',
        },
        mahjonggreen: {
          DEFAULT: '#1B4D3E',
          dark: '#12352B',
          light: '#286F5A'
        }
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', 'serif'],
        sans: ['"Noto Sans TC"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(60, 45, 30, 0.08)',
        'card': '0 10px 28px -4px rgba(70, 50, 30, 0.12), 0 3px 8px -1px rgba(70, 50, 30, 0.05)',
        'luxury': '0 16px 36px -6px rgba(50, 35, 20, 0.16), 0 0 0 1px rgba(166, 124, 67, 0.22)',
        'float-btn': '0 12px 30px rgba(0, 0, 0, 0.35)',
        'mahjong-inset': 'inset 0 2px 5px rgba(0,0,0,0.2)',
        'map-glow': '0 6px 20px rgba(5, 150, 105, 0.35)',
      }
    }
  },
  plugins: [],
}
