/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#1aa17b",
        light: "#727272",
      },
      zIndex: {
        999: "999",
      },
    },
  },
  plugins: [],
};
