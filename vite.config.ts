import { defineConfig } from "vite";
import preactRefresh from "@prefresh/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preactRefresh()],
  resolve: {
    alias: {
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime"
    },
  },
  build: {
    minify: true,
    target: 'es2015',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          preact: ['preact'],
          router: ['preact-router'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: '0.0.0.0',
  }
});
