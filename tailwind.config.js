/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#DEF81D",
        "wd-white": "#FFFFFF",
        "wd-grey": "#999999",
        "wd-darkgrey": "#2D2D2D",
        "wd-black": "#080808",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to left, rgba(0,0,0, 0.3), rgba(0,0,1,1)), url('/assets/hero/hero2.jpg')",
      },
      fontFamily: {
        sans: ["poppins", "arial", "verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
