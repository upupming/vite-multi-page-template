import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import * as globby from 'globby'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vue()],
  build: {
    rollupOptions: {
      input: globby.globbySync(['./pages/**/*.html'])
    },
  }
})
