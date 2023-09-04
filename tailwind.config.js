/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f5f5f5",
        color10: "#D16923",
        color60: "#D6D6D6",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
