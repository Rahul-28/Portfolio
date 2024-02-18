/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EFECEC',
        'secondary': '#0C2D57',
        'accent': '#FC6736'
      }
    },
  },
  plugins: [],
}

