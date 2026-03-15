import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change base to '/repo-name/' if deploying to GitHub Pages sub-path
  base: '/',
})