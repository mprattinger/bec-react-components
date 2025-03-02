/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './lib/**/*.{js,ts,jsx,tsx}',
     './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        becblue: {
          200: "#3caadc", //lightblue
          500: "#1e6eb4" //blue
        },
        becorange: {
          200: "#ffbc1b", //orange
          500: "#ffaf0a" //orange-hover
        },
        becgray: {
          100: "#ededed", //lightlightgray
          200: "#b2b2b2", //lightergray
          500: "#707070", //lightgray
          700: "#3c3b41" //darkgray
        },
      },
      width: {
        'container': '1240px'
      }
    },
  },
  plugins: [],
}

