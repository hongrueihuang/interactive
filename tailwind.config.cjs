/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#B82A06',
      secondary: '#3C0C00',
      light_grey: '#DCDCDC',
      tertiary: '#FFB3A4',
      dark: '#000000',
      white: '#FFFFFF'
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
