import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      bg: '#1a1e2e',
      main: '#bdc6e9',
      hero: '#fde047',
      bgHeader: '#1a1e2e4d',
      lightCyan: '#00f1f9',
      lightPurple: '#cb33f4',
    },
    extend: {
      fontFamily: {
        sans: ['Overpass', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui')],
}
