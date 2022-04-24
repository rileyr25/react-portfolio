module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '465px',
      },
      colors: {
        'darkbg': '#121212',
      },
      maxWidth: {
        '5/6': '83%',
        '45rem': '45rem',
        '55rem': '55rem',
        '2rem': '35rem',
      },
      skew: {
        '8': '8deg',
      },
      spacing: {
        '3/5': '60%',
      }
    },
  },
  plugins: [],
}
