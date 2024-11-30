/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#772787", //purple
        secondary: "#64607D",// dark gray
        light: "#8D8D8D", //gray
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        DMsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
