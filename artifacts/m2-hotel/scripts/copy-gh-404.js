import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(new URL("./", import.meta.url).pathname, "../");
const distDir = resolve(root, "dist");
const indexFile = resolve(distDir, "index.html");
const fallbackFile = resolve(distDir, "404.html");

if (!existsSync(indexFile)) {
  throw new Error(`Missing index.html in dist directory: ${indexFile}`);
}

copyFileSync(indexFile, fallbackFile);
console.log("Copied dist/index.html to dist/404.html");
