import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },

  // Your project root is the m2-hotel folder
  root: path.resolve(import.meta.dirname),

  // IMPORTANT: This ensures 404.html, robots.txt, sitemap.xml, etc. are copied
  publicDir: path.resolve(import.meta.dirname, "public"),

  build: {
    // IMPORTANT: GitHub Pages expects dist/index.html at the root
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
