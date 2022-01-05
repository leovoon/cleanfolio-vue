/* eslint-disable quote-props */
import { defineConfig } from 'windicss/helpers'
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class',
  attributify: false,
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        'pix': {
          paddingInlineEnd: '1px',
          paddingInlineStart: '1px',
        },
      }
      addUtilities(newUtilities)
    }),
    scrollSnapPlugin,

  ],
  theme: {
    colors: {
      'blue-primary': '#2978B5',
      'gray-light': '#555555',
      'gray-darker': '#444444',
      'purple-light': '#CDCDFF',
      'purple-trans': '#BDBDDD',
      'purple-dark': '#90A0D9',
      'white-primary': '#FFFFFF',
      'white-secondary': '#FCFCFC',
      'white-tertiary': '#2978B5',
      'purple-primary': '#90A0D9',
      'purple-secondary': '#2A2F4C',
      'purple-tertiary': '#23283E',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
})
