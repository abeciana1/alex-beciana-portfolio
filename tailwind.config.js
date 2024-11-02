/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      addCommonColors: false,
      defaultTheme: 'light',
      themes: {
        light: {
          background: '#F8F8F8',
          foreground: {
            500: '#BEC5C5',
            default: '#292F36',
          },
          colors: {
            primary: {
              500: '#93c5fd',
              default: '#075985'
            },
            danger: {
              default: '#EA2B1F'
            },
            success: {
              default: '#62C370'
            },
            secondary: {
              default: '#F7B538'
            },
            warning: {
              default: '#f87171'
            },
          },
        },
        dark: {
          foreground: '#F8F8F8',
          background: '#292F36',
          colors: {
            primary: {
              default: '#93c5fd',
            },
            warning: {
              default: '#f87171'
            },
            success: {
              default: '#4ade80'
            },
            secondary: {
              default: '#F7B538'
            },
            danger: {
              default: '#DF2935'
            },
          }
        }
      }
    })
  ],
}