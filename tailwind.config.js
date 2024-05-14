/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        noto: ["Noto Sans JP", "sans-serif"],
      },
      backgroundImage: {
        "fish-pattern": "url('/assets/images/back-ground/fish-bg.png')",
        "topography-pattern":
          "url('/assets/images/back-ground/topography-bg.jpg')",
      },
    },
  },
  plugins: [],
};
