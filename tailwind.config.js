/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        subgray: '#F2F4F6',
      },
    },
  },
  plugins: [],
}
