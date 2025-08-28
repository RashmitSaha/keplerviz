/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // scan all your React source files
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: "#0b0c10",
          mid: "#1f2833",
          accent: "#45a29e",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};

