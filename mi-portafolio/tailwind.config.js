/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#79abf6", // azul
        secondary: "#ff5e84", // rosa
        dark: "#393939", // gris oscuro
      },
    },
  },
  plugins: [],
};
