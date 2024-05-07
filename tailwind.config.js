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
        poor_Story: ['var(--poor_Story)'],
      },
      backgroundImage: {
        'open': "url('~/public/open.png')",
        'close': "url('~/public/close.png')",
      },
    },
  },
  plugins: [],
};
