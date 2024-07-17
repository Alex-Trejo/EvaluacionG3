/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'customized': {
          50: '#f4f3f2',
          100: '#e4dedd',
          200: '#cac1be',
          300: '#ac9b98',
          400: '#947e7b',
          500: '#856f6d',
          600: '#6c5858',
          700: '#5c4c4e',
          800: '#504345',
          900: '#473c3e',
        },
         },
    },
  },
  plugins: [],
}

