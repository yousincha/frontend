import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path from "path";

export default defineConfig({
  server: {
    port: 5173,
    host: "192.168.0.45",
  },
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 프론트엔드 폴더 경로 설정
      backend: path.resolve(__dirname, "../backend/src"), // 백엔드 폴더 경로 설정
    },
  },
});
