/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rub': ["Rubik"], 
        'qus': ["Questrial"], 
      },
      colors: {
        'bgColor': '#B6C5A3',
        'phColor': '#737373',
        'liColor': '#222222',
        'boxColor': '#F5FDEB',
        'boxbColor': '#F2F2F2',
        
      },
      screens: {
        'laptop': {'min': '992px', 'max': '1199.98px',},
        // => @media (min-width: 992px) { ... }
  
        'tablet': {'min': '768px', 'max': '991.98px',},
        // => @media (min-width: 768px) { ... }
  
        'android': {'min': '576px', 'max': '767.98px',},
        // => @media (min-width: 576px) { ... }
  
        'mobile': {'min': '320px', 'max': '575.98px',},
        // => @media (min-width: 320px) { ... }
      },
    },
  },
  plugins: [],
}

