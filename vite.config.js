import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
      scss: {
        additionalData: `
      @use 'src/assets/scss/variables.scss' as *;
      @use 'src/assets/scss/mixin.scss' as *;
    `,
      },
    },
  },
);
