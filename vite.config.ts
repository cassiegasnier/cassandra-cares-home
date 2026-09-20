// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static hosting (GitHub Pages): set GITHUB_PAGES=true at build time.
// The site is served from https://<user>.github.io/<repo>/ so every asset URL
// needs that sub-path prefix. With a custom domain at the apex
// (e.g. cassandradomicile.fr) set BASE_PATH=/ instead.
const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const base = process.env["BASE_PATH"] ?? (isGithubPages ? "/cassandra-cares-home/" : "/");

export default defineConfig({
  vite: { base },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // The site has no server code, so every page can be rendered to plain HTML
    // at build time — required for a static host like GitHub Pages.
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
