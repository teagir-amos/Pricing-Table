/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pricing/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'phone': '375px',
      // => @media (min-width: 375px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

