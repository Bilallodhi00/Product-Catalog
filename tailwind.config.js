/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {  colors: {
      black: "#F5F0E6",
      sienna: "#E06F43",
      alabaster: "#F5F0E6",
      dutchwhite: "#f5e6c6",
      darkalabaster: "#ebe1c6",
      celestialblue: "#d6edfb",
      grey: "#131921",
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
