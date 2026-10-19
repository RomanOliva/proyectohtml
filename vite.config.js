import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// VITE_BASE lo define el workflow de GitHub Pages (ej: /mi-repo/). En local y Vercel queda "/".
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
