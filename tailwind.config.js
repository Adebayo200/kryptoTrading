/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sarpanch: ['Sarpanch', 'sans-serif'],
      },
  colors: {
        blue: '#0019FF',      
        white:"#FFFFFF",
        yellow:"#F7931A",
        black:"#000000",
        customGray: {
          light: '#F3F4F6',
          DEFAULT: '#D1D5DB',
          dark: '#4B5563'
        }
    },

    },
     screens: {
      'xxs':'330px',  
      'xs':'400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
