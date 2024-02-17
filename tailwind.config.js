/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '577px',
      // => @media (min-width: 640px) { ... }

      'md': '578px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Abyssinica: ["Abyssinica SIL", "serif"],
      Seymour: ["Seymour One", "sans-serif"],
      acme: ["Acme", "sans-serif"],
    },
    extend: {
     
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
