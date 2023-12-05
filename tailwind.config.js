/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.html"],
  theme: {
    colors: {
      'dark-clr': '#28283D',
      'primary-clr': '#4D96A9',
      'secondary-clr': '#87879D',
      'success-clr': '#855FB1',
      'danger-clr': '#8FE3F9',
      'warning-clr': '#D9B8FF',
      'info-clr': '#DFDFDF',
      'lighter-clr': '#FAFAFA',
      'light-clr': '#FFFFFF',
    },
    fontFamily: {
      'Red-Hat': ['Red Hat Display', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: ['1rem', '1.625rem'],
      xl: ['1.25rem', '1.625rem'],
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '7xl': ['4rem', '4rem'],
    },
    borderRadius: {
    },
    extend: {},
  },
  plugins: [],
}

