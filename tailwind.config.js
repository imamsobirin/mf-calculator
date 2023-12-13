/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-background": "#f1f5f9",
        "blue-sky": "#0284c7",
        "gray-line": "#475569",
        "gray-font": "#929aa6",
        "red-warning": "#dc3545",
        "green-online": "#28a745",
        "yellow-pending": "#ffc619",
        "white-text": "#f6f6f6",
        "blue-primary": "#023246",
        "blue-secondary": "#287094",
        "brown-white": "#D4D4CE",
      },
    },
  },
  plugins: [],
};
