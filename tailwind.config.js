/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Bitter: ["Bitter", "serif"],
      Noto: ["Noto Sans", "sans-serif"],
      Playfair: ["Playfair Display", "serif"],
      PT: ["PT Serif", "serif"],
    },
  },
  plugins: [],
};
