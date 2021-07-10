module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kvadrat: "#ab1719",
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        serif: ['Coustard', 'serif'],
        cursive: ['Mr Dafoe', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
