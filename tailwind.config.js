/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        tiltNeon: ['var(--font-tilt-neon)', 'sans-serif'],
      }
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: false,
      defaultTheme: 'light',
      themes: {
        light: {
          default: '#F8F8F8',
          background: '#F8F8F8',
          foreground: {
            500: '#BEC5C5',
            default: '#292F36',
          },
          colors: {
            primary: {
              500: '#93c5fd',
              default: '#075985',
            },
            danger: {
              default: '#EA2B1F',
            },
            success: {
              default: '#62C370',
            },
            secondary: {
              default: '#F7B538',
            },
            warning: {
              default: '#f87171',
            },
          },
        },
        dark: {
          default: '#292F36',
          foreground: '#F8F8F8',
          background: '#292F36',
          colors: {
            primary: {
              default: '#93c5fd',
            },
            warning: {
              default: '#f87171',
            },
            success: {
              default: '#4ade80',
            },
            secondary: {
              default: '#F7B538',
            },
            danger: {
              default: '#DF2935',
            },
          },
        },
      },
    }),
  ],
};
