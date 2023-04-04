/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
          primary: {
            DEFAULT: '#5585FF',
            light: {
              DEFAULT: '#f6faff',
              1: '#eaf0f7',
              2: '#f6faff',
            },
            dark: {
              DEFAULT: '#0e1325',
              1: '#0a1127',
              2: '#161c35',
            }
          },
          stackBorder: {
            light: '#00000025',
            dark: '#ffffff25',
            DEFAULT: '#00000025'
          }
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}