import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF7F20', // Brand orange color
        },
        white: {
          DEFAULT: '#FFFFFF', // Brand white color
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'pulse': 'pulseAnimation 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseAnimation: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});