module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'slide-out': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.3s',
        'slide-out': 'slide-out 0.3s',
      },
    },
  },
  variants: {
    extend: {
      translate: ['active'],
    },
  },
  plugins: [],
};
