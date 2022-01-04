/* eslint-disable quote-props */
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  attributify: false,
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
