/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '300px'
      },
      colors: {
        'l-red': 'hsl(356, 100%, 66%)',
        'vl-red': 'hsl(355, 100%, 74%)',
        'vd-blue': 'hsl(208, 49%, 24%)',
        'g-blue': 'hsl(240, 2%, 79%)',
        'vdg-blue': 'hsl(207, 13%, 34%)',
        'vd-black-blue': 'hsl(240, 10%, 16%)',
        'intro-left': 'hsl(13, 100%, 72%)',
        'intro-right': 'hsl(353, 100%, 62%)',
        'body-left': 'hsl(237, 17%, 21%)',
        'body-right': 'hsl(237, 23%, 32%)'
      },
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      content: {
        'arrow-light': 'url("/images/icon-arrow-light.svg")'
      }
    },
  },
  plugins: [],
}

