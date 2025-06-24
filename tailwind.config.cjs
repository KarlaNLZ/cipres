/** @type {import('tailwindcss').Config} */
// src/components/Hero/Hero.jsx

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'nosotros-blue': '#0d47a1',
        'nosotros-grey': '#9e9e9e',
        primary: '#007acc',
        'primary-dark': '#005f99',
        text: '#333333',
        'bg-light': '#f5f5f5',
      },
      spacing: { nav: '4rem', footer: '4rem' },
      maxWidth: { custom: '960px' },
  
    },
  },
  plugins: [],
};
