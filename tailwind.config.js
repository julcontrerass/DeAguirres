/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./pages/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // 🌴 Playa Selva Mexicana — Tonos Suaves & Claros
        sand: {
          DEFAULT: '#EDE1C8',    // arena cálida de playa
          light: '#F0E4CE',      // arena clara cálida (secciones principales)
          dark: '#D9C8A5',       // arena húmeda (footer)
        },
        jungle: {
          DEFAULT: '#3D6B5B',    // selva media (secciones oscuras)
          deep: '#2D5F4F',       // selva profunda (hero)
          light: '#5A8F7B',      // selva clara
        },
        sage: '#8BB09A',          // salvia suave
        palm: '#B8D4BE',          // palma clara
        mint: '#CDDDD0',          // menta suave con tono arena (serie section)
        coral: '#D4906C',         // coral suave (acento principal)
        ocean: '#7EB8AE',         // turquesa del caribe
        driftwood: '#C4A882',     // madera a la deriva
        goldsoft: '#D4B876',      // dorado suave
        cream: '#FFF8EE',         // crema cálida (texto sobre oscuro)
        bark: '#3B4A42',          // corteza oscura (texto sobre claro)
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
        'soft': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'hard': '0 20px 60px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 40px rgba(212, 144, 108, 0.3)',
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
