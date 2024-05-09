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
      keyframes: {
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        translate: {
          '100%': { transform: 'translateX(50px)' },
        },
      },
      animation: {
        rotate: 'rotate 5s linear infinite',
      },
    },
  },
  plugins: [],
};
