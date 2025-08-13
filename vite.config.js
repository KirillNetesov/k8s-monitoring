import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kirill.netesov/', // 👈 важно
  plugins: [react()],
})