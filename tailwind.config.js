module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6D597A',
        'primary-hover': '#796387',
        secondary: '#FBBE9D',
        'secondary-hover': '#fab189',
        dark: '#231C07',
        'white-opacity': '#FFFFFFCC',
      },
      fontFamily: {
        primary: ['Nunito', 'Arial', 'sans-serif'],
        secondary: ['Caveat', 'serif'],
      },
    },
  },
  plugins: [],
};
