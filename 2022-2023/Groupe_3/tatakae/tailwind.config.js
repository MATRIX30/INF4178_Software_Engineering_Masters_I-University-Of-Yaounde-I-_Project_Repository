/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c5dc6",
        green: "#048B9A",
        ourBlue: "#0145AC",
        red : '#db0d0d'
      },
    },
  },
  plugins: [],
}

