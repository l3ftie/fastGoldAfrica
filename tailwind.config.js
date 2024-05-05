/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "black-100": "#2B2C35",
      },
      backgroundImage: {
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
