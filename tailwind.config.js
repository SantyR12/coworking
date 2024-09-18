/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        cian: '#FFFFFF',
        coral: '#FF6F61',
        azulOscuro: '#005B96', 
        grisClaro: '#E0E0E0', 
        light: '#6A97A8',
        blue: '#b0e0e6'
        
      },
    },
  },
  plugins: [],
}
