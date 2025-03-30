import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,  // Use a different port
    strictPort: false, 
    allowedHosts: ['9ab0-2402-8100-3869-b7f6-2039-da0a-4030-fe1f.ngrok-free.app']
  }
})
