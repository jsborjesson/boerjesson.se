module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kvadrat: "#ab1719",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
