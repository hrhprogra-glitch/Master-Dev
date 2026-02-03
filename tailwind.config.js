/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a', // Azul pizarra oscuro
          primary: '#38bdf8', // Cyan brillante para SaaS
          accent: '#6366f1', // Indigo para botones de acción
        }
      }
    },
  },
  plugins: [],
}