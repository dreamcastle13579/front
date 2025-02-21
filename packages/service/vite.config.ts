import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "intro-storybook-react-template": path.resolve(
        __dirname,
        "../design-system/src"
      ),
    },
  },
});
