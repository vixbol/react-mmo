/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Rubik-Vinyl": ["Rubik Vinyl", "Lobster"],
        Condensed: ["Roboto Condensed", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
