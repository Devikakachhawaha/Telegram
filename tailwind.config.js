/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {colors: {
      customGray: 'rgb(33, 33, 33)',
      customBlack:'rgb(24,24,24)',
      customButton:'#2b2b2b',
    },},
  },
  plugins: [],
}

