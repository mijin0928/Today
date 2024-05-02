/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7F669D',
        background: '#FBFACD',
      },
      fontFamily: {
        fredoka: ['var(--fredoka)'],
      },
    },
  },
  plugins: [],
};
