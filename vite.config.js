import { defineConfig } from "vite";

export default defineConfig({
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
