/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1e3a8a',
        'ogs-blue': '#0f172a',
        'ogs-orange': '#f97316',
      },
    },
  },
  plugins: [],
}
