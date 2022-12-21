/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#d1258c",
        
"secondary": "#3b75c6",
        
"accent": "#4b73bc",
        
"neutral": "#1A242D",
        
"base-100": "#2E2C44",
        
"info": "#9BD4F8",
        
"success": "#2BDAB9",
        
"warning": "#AF7904",
        
"error": "#FC595C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}