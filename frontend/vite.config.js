import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import * as process from 'process'
export default defineConfig({
  plugins: [react(),nodePolyfills()],
  define: {
    global: "window",
    Buffer: [],
  },
})
