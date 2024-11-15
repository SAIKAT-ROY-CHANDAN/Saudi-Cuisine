/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-banner": "url('/public/images/banner-svg.svg')",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
