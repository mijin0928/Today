/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        small: '420px',
      },
      colors: {
        primary: '#7F669D',
        background: '#FBFACD',
      },
      fontFamily: {
        fredoka: ['var(--fredoka)'],
        poor_Story: ['var(--poor_Story)'],
      },
      backgroundImage: {
        open: "url('~/public/open.png')",
        close: "url('~/public/close.png')",
        paper: "url('~/public/paper.png')",
        reset: "url('~/public/reset.png')",
        arrow: "url('~/public/arrow.png')",
        morning: "url('~/public/morning.png')",
        day: "url('~/public/day.png')",
        night: "url('~/public/night.png')",
        delete: "url('~/public/delete.png')",
        deleteOn: "url('~/public/delete-on.png')",
        checkbox: "url('~/public/checkbox.png')",
        checkboxOn: "url('~/public/checkbox-on.png')",
        comma: "url('~/public/comma.png')",
      },
      keyframes: {
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        translate: {
          '100%': { transform: 'translateX(50px)' },
        },
        skew: {
          '0%': { transform: 'skew(-2deg) scale(1, 1.1)' },
          '100%': { transform: 'skew(-8deg) scale(1, 1.1)' },
        },
        shake: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(10px)' },
        },
        up: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        down: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-10px)' },
        },
        bouncing: {
          '0%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        rotate: 'rotate 5s linear infinite',
        skew: 'skew 1.2s linear infinite alternate',
        shake: 'shake .2s linear infinite alternate',
        up: 'up .3s linear',
        down: 'down .3s linear',
        bouncing: 'bouncing .6s ease-in infinite alternate',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
