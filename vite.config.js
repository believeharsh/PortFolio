import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteReactPlugin } from "vite-plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [ViteReactPlugin()]
})
