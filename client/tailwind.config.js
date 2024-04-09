/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mukta: ['Mukta', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    colors:{
      blue: "#51B0FE",
      darkBlue:"#0A5EF4",
      lightBlue:"#EAF5FF",
      gredientLight:"#144174",
      gredientDark:"#041422",
      bgWhite:"#f2f2f2"
  
    }
    },
  },
  plugins: [],
}

