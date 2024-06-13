/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        upDown: 'upDown 2s ease-in-out infinite',
      },
    }
  },
  plugins: []
}