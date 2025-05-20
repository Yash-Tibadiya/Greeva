import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    input: {
      main: 'index.html',
      bedroom: 'bed_room.html',
      livingroom: 'living_room.html',
      curtains: 'curtains.html'
    }
  },
})
