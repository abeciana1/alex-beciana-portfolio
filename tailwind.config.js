/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      lm: '376px',
      tab: '481px',
      sml: '769px',
      lap: '1025px',
      xl: '1441px'
    },
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
      themes: {
        light: {
          background: '#F8F8F8',
          foreground: {
            500: '#BEC5C5',
            DEFAULT: '#292F36',
          },
          colors: {
            primary: {
              500: '#93c5fd',
              DEFAULT: '#075985',
            },
            danger: {
              DEFAULT: '#EA2B1F',
            },
            success: {
              DEFAULT: '#62C370',
            },
            secondary: {
              DEFAULT: '#F7B538',
            },
            warning: {
              DEFAULT: '#f87171',
            },
          },
        },
        dark: {
          colors: {
            foreground: '#F8F8F8',
            background: '#292F36',
            primary: {
              DEFAULT: '#93c5fd',
            },
            warning: {
              DEFAULT: '#f87171',
            },
            success: {
              DEFAULT: '#4ade80',
            },
            secondary: {
              DEFAULT: '#F7B538',
            },
            danger: {
              DEFAULT: '#DF2935',
            },
          },
        },
      },
    }),
  ],
};
