const fs = require("fs");
const path = require("path");

const root = __dirname;
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const filesToCopy = [
  "index.html",
  "app-config.js"
];

for (const file of filesToCopy) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dist, file));
  }
}

// Copy supabase folder only for reference if present; it is not served by the app.
const supabaseDir = path.join(root, "supabase");
if (fs.existsSync(supabaseDir)) {
  fs.cpSync(supabaseDir, path.join(dist, "supabase"), { recursive: true });
}

console.log("Build complete: dist folder created.");
