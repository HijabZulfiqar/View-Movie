/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1366px",
    },
    fontFamily: {
      Abyssinica: ["Abyssinica SIL", "serif"],
      Seymour: ["Seymour One", "sans-serif"],
    },
    extend: {
     
    },
  },
  plugins: [],
};
