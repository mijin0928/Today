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
      keyframes: {
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate: 'rotate 5s linear infinite',
      },
    },
  },
  plugins: [],
};
