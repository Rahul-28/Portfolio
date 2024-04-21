/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        noto: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
