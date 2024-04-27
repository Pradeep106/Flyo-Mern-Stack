/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mini: { max: "639px" },
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        darkBlue: "#0A5EF4",
        lightBlue: "#EAF5FF",
        gredientLight: "#144174",
        gredientDark: "#041422",
        bgWhite: "#f2f2f2",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
};
