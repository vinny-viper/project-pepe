/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'miami-blue': '#00BFFF',
        'miami-pink': '#FF69B4',
        'miami-yellow': '#FFD700',
        'miami-white': '#F5F5F5',
        'miami-dark': '#1e293b',
        'infowars-red': '#ff0000',
        'infowars-dark': '#111111',
        'infowars-light': '#ffffff',
        'infowars-grey': '#333333',
        'infowars-border': '#666666',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-up-delay-1': 'fade-in-up 0.8s ease-out 0.3s forwards',
        'fade-in-up-delay-2': 'fade-in-up 0.8s ease-out 0.6s forwards',
        'zoom-in-out': 'zoom-in-out 30s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease-in',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in-out': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}