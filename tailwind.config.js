/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: "#0a0a0a",
        secondary: "#64748b",
        primary: "#14b8a6",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: []
};
