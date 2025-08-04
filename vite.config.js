import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio/', // ← Reminder: repo name goes here with slashes!
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
