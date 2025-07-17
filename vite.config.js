import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), dts({ rollupTypes: true })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "RebelComponents",
      fileName: "rebel-components",
    },
    rollupOptions: {
      external: ["lit", "lit/decorators.js"],
      output: {
        globals: {
          lit: "Lit",
          "lit/decorators.js": "LitDecorators",
        },
      },
    },
  },
  server: {
    open: "/src/index.html",
  },
});
