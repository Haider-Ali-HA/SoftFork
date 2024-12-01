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
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
