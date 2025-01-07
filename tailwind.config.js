/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 65%)',
        black: 'hsl(0, 0%, 0%)',
        green: 'hsl(80, 60%, 35%)',
        yellow: 'hsl(46, 74%, 92%)',
      },
      fontFamily: {
        heading: ['"Fjalla One"', 'sans-serif'],
        body: ['"Fira Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}