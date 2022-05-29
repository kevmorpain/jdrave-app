module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6D597A',
        'primary-hover': '#796387',
        secondary: '#FBBE9D',
        'secondary-hover': '#fab189',
        tertiary: '#ECE2D0',
        dark: '#231C07',
        'white-opacity': '#FFFFFFCC',
        hero: '#231C074D',
      },
      fontFamily: {
        primary: ['Nunito', 'Arial', 'sans-serif'],
        secondary: ['Caveat', 'serif'],
      },
      fontSize: {
        '4.5xl': ['2.5rem', '1.4'],
      },
      zIndex: {
        1: '1',
      },
      maxWidth: {
        hero: '956px',
      },
      boxShadow: {
        hero: '-2px -2px 2px',
      },
      borderWidth: {
        6: '6px',
      },
    },
  },
  plugins: [],
};
