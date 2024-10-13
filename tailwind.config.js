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
         inter: ['Inter', 'sans-serif'],
      },
  colors: {
        blue: '#0019FF',      
        white:"#FFFFFF",
        yellow:"#F7931A",
        black:"#000000",
        gray:"#D9D9D9",
        lightBlue:"#C2C7FF",
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
      'md': '768px',
      'lg': '900px',
      "xl": '1024px',
      "2xl": '1280px',
  
    }
  },
  plugins: [],
}
