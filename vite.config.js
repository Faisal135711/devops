import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/devops/", // must match your repo name
  build: {
    outDir: "dist",
    assetsDir: "assets", // keep js/css in assets/
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
