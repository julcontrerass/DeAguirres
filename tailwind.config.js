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
        // 🌸 Groovy Hippie Aesthetic — Colores Vibrantes & Retro (versión más clara)
        sand: {
          DEFAULT: '#D39C71',    // terracota claro (secciones A)
          light: '#DCA77D',      // terracota más claro
          dark: '#C38F6A',       // terracota oscuro (footer)
        },
        jungle: {
          DEFAULT: '#836E90',    // morado psicodélico oscuro (selva media)
          deep: '#685771',       // morado profundo (hero)
          light: '#A682BE',      // morado claro
        },
        sage: '#DDC140',          // mostaza brillante
        palm: '#FFB471',          // naranja atardecer
        mint: '#6E9077',          // verde bosque claro (secciones B)
        coral: '#FFFDF7',         // blanco crema (acento texto)
        ocean: '#78B5CA',         // azul retro
        driftwood: '#B0856C',     // marrón madera
        goldsoft: '#EEC861',      // dorado sol
        cream: '#FFFDF7',         // crema/blanco roto (texto sobre oscuro)
        bark: '#2B2117',          // marrón muy oscuro (texto sobre claro)
      },
      fontFamily: {
        display: ['"Excalibur Nouveau"', 'serif'],
        body: ['"Excalibur Nouveau"', 'sans-serif'],
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
        'glow': '0 0 40px rgba(232, 182, 44, 0.35)',
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
