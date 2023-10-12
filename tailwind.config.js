const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Istok Web', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        greenSuccess: '#3DB872',
        greenPrimary: '#FF00B8',
        greenSecondary: '#E601C6',
        blackPrimary: '#0e0e11',
        blackSecondary: '#15191d',
        blackSoft: '#292926',
        whitePrimary: '#FFFFFF',
        whiteLight: '#818792',
        greyPrimary: '#3D3B3C',
        greySecondary: '#7F7979',
        greyLight: '#d1d5da',
        greyDark: '#262626',
      },
      dropShadow: {
        musifyShadow: '7px 7px 5px rgba(0, 0, 0, 0.30)',
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
