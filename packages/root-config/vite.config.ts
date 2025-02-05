import { defineConfig, UserConfigExport } from "vite"
import react from "@vitejs/plugin-react"
import vitePluginSingleSpa from "vite-plugin-single-spa"

const PORT = 3000

// https://vite.dev/config/
export default defineConfig(() => {
  const config: UserConfigExport = {
    base: "./",
    plugins: [
      react(),
      vitePluginSingleSpa({
        type: "root",
        imo: "5.1.1",
        // imo: () => `https://my.cdn.example.com/import-map-overrides@5.1.1`,
        importMaps: {
          dev: ["src/importMap.dev.json", "src/importMap.shared.json"],
          build: ["src/importMap.json", "src/importMap.shared.json"],
        },
      }),
    ],
    server: {
      port: PORT,
    },
    preview: {
      port: PORT,
    },
    define: {
      "process.env": process.env,
    },
    build: {
      rollupOptions: {
        input: {
          index: "./index.html",
          "root-config": "./src/main.tsx",
        },
        output: {
          format: "system",
          entryFileNames: "[name].js",
          assetFileNames: "assets/[name][ext]",
          globals: {
            "single-spa": "singleSpa",
            "single-spa-layout": "singleSpaLayout",
          },
        },
        preserveEntrySignatures: "strict",
        external: ["single-spa", "single-spa-layout"],
      },
    },
  }
  return config
})
