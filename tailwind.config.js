/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button-gradient':
          ' linear-gradient(180deg, #FFBF00 0%, #F2A50C 100%);',
      },
      backgroundColor: {
        main: '#111111',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        yellowMain: '#FFBF00',
        buttonBrown: '#332200',
      },
      keyframes: {
        animeLeft: {
          from: { transform: 'translate3d(-40px, 0, 0)' },
          to: { transform: 'translate3d(0, 0, 0)' },
        },
        animeTop: {
          from: { transform: 'translate3d(0px, -40px, 0)' },
          to: { transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        animeLeft: 'animeLeft 0.5s forwards',
        animeTop: 'animeTop 1s forwards',
      },
    },
  },
  plugins: [],
};
