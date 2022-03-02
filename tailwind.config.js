module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monty: ['Montserrat'],
      },
      colors: {
        'background': '#141824',
        'accent-yellow': '#FFB600',
        'accent-blue': '#0049FF',
      },
      backgroundImage: {
        'footer-svg': "url('./curveAsymmetricalB.svg')",
      },

    },
  },
  plugins: [],
}
