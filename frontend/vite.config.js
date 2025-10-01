import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the correct base for GitHub Pages project site: https://<user>.github.io/react-movie/
  base: '/react-movie/',
})
