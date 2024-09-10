/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#F5F3F1', // Very light beige
        'primary-200': '#E8DCD2', // Light beige
        'primary-300': '#D4BFA6', // Medium beige
        'primary-400': '#B89A6E', // Dark beige
        'primary-500': '#8E5A4E', // Deep brown
        'primary-600': '#6C3F3B', // Darker brown
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'slide 120s linear infinite',
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 223, 186, 0.8), 0 0 30px rgba(255, 223, 186, 0.6)',
      },
      animationPlayState: {
        pause: 'paused',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animation-play-state-pause': {
          'animation-play-state': 'paused',
        },
      });
    },
  ],
};
