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
        red: 'hsl(6, 78.60%, 40.40%)',
        yellow: 'hsl(46, 74%, 92%)',
        green: 'hsl(80, 60%, 35%)',
        teal: 'hsla(193, 24.30%, 40.40%, 0.82)'
      },
      fontFamily: {
        heading: ['"Fjalla One"', 'sans-serif'],
        body: ['"Fira Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}