/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Light-Cyan": "hsl(193, 38%, 86%)",
        "Neon-Green": "hsl(150, 100%, 66%)",
        "GrayishBlue": "hsl(217, 19%, 38%)",
        "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "DarkBlue": "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
