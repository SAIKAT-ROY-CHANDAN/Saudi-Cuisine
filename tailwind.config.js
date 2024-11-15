/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand": {
          100: "#F9E6E4", 
          200: "#F0B8B1", 
          300: "#E88B84", 
          400: "#DF5D55", 
          500: "#B52B1D", 
          600: "#9B2318", 
          700: "#801B12", 
        },
      },
      backgroundImage: {
        "hero-banner": "url('/public/images/banner-svg.svg')",
        "contact-banner": "url('/public/images/contact banner.png')",
        "footer-banner": "url('/public/images/Footer.png')"
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
