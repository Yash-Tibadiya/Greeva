import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        bed_room: "bed_room.html",
        living_room: "living_room.html",
        curtains: "curtains.html",
      },
    },
  },
});