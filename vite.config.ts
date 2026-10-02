// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

// Ensure ultra high-definition cinematic intro assets are synchronized
try {
  const introDir = path.resolve(process.cwd(), "public/images/intro");
  if (!fs.existsSync(introDir)) {
    fs.mkdirSync(introDir, { recursive: true });
  }
  const userProfile = process.env["USERPROFILE"] || "";
  const currentBrainDir = path.join(
    userProfile,
    ".gemini",
    "antigravity-ide",
    "brain",
    "fd8d7ef1-069a-4598-a4b7-7f424ac39fcb"
  );
  const desktopSrc = path.join(currentBrainDir, "karshni_cake_perfect_desktop_1790960930428.jpg");
  const mobileSrc = path.join(currentBrainDir, "karshni_cake_perfect_mobile_1790960896278.jpg");
  const desktopDest = path.join(introDir, "intro-desktop.jpg");
  const mobileDest = path.join(introDir, "intro-mobile.jpg");

  if (fs.existsSync(desktopSrc)) {
    fs.copyFileSync(desktopSrc, desktopDest);
  }
  if (fs.existsSync(mobileSrc)) {
    fs.copyFileSync(mobileSrc, mobileDest);
  }
} catch (e) {
  // Silent fallback if paths differ
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

