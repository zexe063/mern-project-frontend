/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Inter:['Inter', 'sans-serif'],
      },
      colors:{
        'sky-white': '#F9F9F9',
        'another-white': "#edeef1",
        'another-blue' :"#2874F0",
        'another-yellow' :'#ffd43b',
        'another-grey': '#183153'
      }
    },
  },
  plugins: [],
}

