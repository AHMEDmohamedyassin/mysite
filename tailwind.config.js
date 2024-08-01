/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        mainColor : "#374eef" ,
        textColor : "#002e5b" ,
        secondaryColor : "#eef8ff",
        bgColor : "#ffffff"
      }
    },
  },
  plugins: [],
}