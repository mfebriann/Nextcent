/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        silver: "#F5F7FA",
        "light-grey": "#89939E",
        grey: "#717171",
        "dark-grey": "#4D4D4D",
        black: "#263238",
        info: "#2194F3",
        secondary: "#263238",
        primary: "#4CAF4F",
        shade2: "#388E3B",
        tint5: "#E8F5E9",
        "grey-900": "#18191F",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
