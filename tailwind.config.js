/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#2a2a2a',
          light: '#3a3a3a',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          dark: '#e8dfd0',
        },
        burnt: {
          DEFAULT: '#c17854',
          dark: '#a86345',
        },
        forest: '#4a5f4d',
        gold: {
          DEFAULT: '#d4a574',
          dark: '#b88a5a',
        },
      },
      fontFamily: {
        display: ['Newsreader', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'medium': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'hard': '0 20px 60px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 40px rgba(193, 120, 84, 0.4)',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '24px',
        xl: '48px',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '500ms',
        'very-slow': '700ms',
      },
    },
  },
  plugins: [],
}