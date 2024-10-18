/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#636AE8',
        active: "#000",
        one: '#EA916E',
        two: '#7F55E0',
        three: '#22CCB2',
        four: '#E8618C',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

