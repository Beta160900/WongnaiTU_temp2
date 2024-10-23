/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bg1:"#F3F3F3",
        pink1:"#F687B3",
        blue1:"#060E4E"
      },
      fontFamily: {
        body: ['Roboto']
      }
    },
  },
  plugins: [],
}