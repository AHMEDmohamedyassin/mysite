/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: false, // Do not center the container
      padding: '0', // Remove default padding
      screens: {}, // Remove default max-width values for breakpoints
    },
    extend: {
      colors:{
        mainColor : "#374eef" ,
        textColor : "#002e5b" ,
        secondaryColor : "#eef8ff",
        bgColor : "#ffffff"
      }
    },
  },
  corePlugins: {
    container: false, // Disable the container plugin if you want to completely remove it
  },
  plugins: [],
}