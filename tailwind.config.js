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
        // 🌸 Groovy Hippie Aesthetic — Colores Vibrantes & Retro
        sand: {
          DEFAULT: '#AF6938',    // terracota hippie (secciones A)
          light: '#C07B45',      // terracota claro
          dark: '#8F5228',       // terracota oscuro (footer)
        },
        jungle: {
          DEFAULT: '#5A3D6B',    // morado psicodélico oscuro (selva media)
          deep: '#351F42',       // morado profundo (hero)
          light: '#8858A8',      // morado claro
        },
        sage: '#D1AC00',          // mostaza brillante
        palm: '#FF9B42',          // naranja atardecer
        mint: '#2C4E36',          // verde bosque hippie (secciones B)
        coral: '#FFFDF7',         // blanco crema (acento texto)
        ocean: '#4B9CB8',         // azul retro
        driftwood: '#965C3B',     // marrón madera
        goldsoft: '#E8B62C',      // dorado sol
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
