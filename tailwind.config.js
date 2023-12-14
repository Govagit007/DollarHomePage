/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your light mode colors
        light: {
          primary: "#f1f4f7",
          secondary: "#f3f4f6",
          ternary: "#0000",
          // Add more light mode colors as needed
        },
        // Define your dark mode colors
        dark: {
          primary: "#1f2937",
          secondary: "#111827",
          ternary: "#2f3e53",
          // Add more dark mode colors as needed
        },
      },
    },
  },
  plugins: [],
};
