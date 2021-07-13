const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kvadrat: "#ab1719",
        gray: colors.coolGray,
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        serif: ['Coustard', 'serif'],
        cursive: ['Mr Dafoe', 'cursive'],
      }
    },
  },
  variants: {
    extend: {
      textColor: ['active']
    },
  },
  plugins: [],
}
