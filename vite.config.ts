import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { type UserConfig, defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  },
  build: {
    sourcemap: true,
    target: "esnext",
    minify: true,
    cssTarget: "esnext",
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react/jsx-runtime", "react-dom"]
        }
      }
    }
  }
}) satisfies UserConfig;
