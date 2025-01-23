/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pricing/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'sm': {"max" : "375px"},
      // => @media (min-width: 375px) { ... }

      'md': '{"min" : "376px", "max" : "768px"}',

      'lg': '{"min" : 768"px", "max" : "1024px"}',
      // => @media (min-width: 1024px) { ... }

      'xl': '{"min" : "1024px", "max" : "1280px"}',
      // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

