import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      plugins: [vue()],
      base: "/ar-hub/",
    };
  }

  return {
    plugins: [vue()],
  };
});

