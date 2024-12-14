/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'f1': '"Jaro", sans-serif',
        'f2': '"Agu Display", serif',
        'f3':'"Poetsen One", sans-serif',
        'f4':'"Aldrich", sans-serif',
      },
      scale:{
        '120':'1.5',
      },
      transitionDuration:{
        '1500':'1500ms'
      },
      transitionDelay: {
        '800': '800ms', 
      },
    },
  },
  plugins: [],
}