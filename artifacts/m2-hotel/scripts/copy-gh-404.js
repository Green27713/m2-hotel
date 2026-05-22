import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("./", import.meta.url).pathname, "../");
const distDir = resolve(root, "dist");
const indexFile = resolve(distDir, "index.html");
const fallbackFile = resolve(distDir, "404.html");
const publicFallbackDir = resolve(distDir, "public");
const publicFallbackFile = resolve(publicFallbackDir, "404.html");

if (!existsSync(indexFile)) {
  throw new Error(`Missing index.html in dist directory: ${indexFile}`);
}

copyFileSync(indexFile, fallbackFile);
if (!existsSync(publicFallbackDir)) mkdirSync(publicFallbackDir, { recursive: true });
copyFileSync(indexFile, publicFallbackFile);
console.log("Copied dist/index.html to dist/404.html and dist/public/404.html");
