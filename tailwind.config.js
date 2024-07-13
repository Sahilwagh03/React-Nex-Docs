/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
        },
        slideMask: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        upDown: 'upDown 2s ease-in-out infinite',
        slideMask: 'slideMask 3s ease infinite',
      },
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-0': {
          'animation-delay': '0s',
        },
        '.animation-delay-200': {
          'animation-delay': '0.2s',
        },
        '.animation-delay-400': {
          'animation-delay': '0.4s',
        },
        '.animation-delay-600': {
          'animation-delay': '0.6s',
        },
        '.animation-delay-800': {
          'animation-delay': '0.8s',
        },
        '.animation-delay-1000': {
          'animation-delay': '1s',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ]
}