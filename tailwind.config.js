module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['col-start-1', 'col-start-2'],
  theme: {
    extend: {
      colors: {
        primary: '#6D597A',
        'primary-hover': '#796387',
        secondary: '#FBBE9D',
        'secondary-hover': '#fab189',
        'secondary-light': '#fddece',
        tertiary: '#ECE2D0',
        dark: '#231C07',
        'dark-light': '#7b776a',
        'white-opacity': '#FFFFFFCC',
        hero: '#231C074D',
      },
      fontFamily: {
        primary: ['Nunito', 'Arial', 'sans-serif'],
        secondary: ['Caveat', 'serif'],
        app: ['Lato', 'Nunito', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': ['2.5rem', '1.4'],
      },
      zIndex: {
        1: '1',
        2: '2',
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
      gridTemplateColumns: {
        'fill-2': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
