import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
    tsconfigPaths() // Este plugin resolve o @/ automaticamente lendo o tsconfig!
  ],
  server: {
    // Em desenvolvimento, encaminha /api para o backend (pasta server/)
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
})
