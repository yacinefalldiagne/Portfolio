// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← Important !

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ← Ajoute ça ici
  ],
})