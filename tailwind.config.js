/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1110px",
        },
      },
      colors: {
        black: {
          DEFAULT : "#495567",
          1: "#939CAA",
        },
        orange: "#FCB72B",
        white: "#FFF"
      },
    },
  },
  plugins: [],
};
