import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"
import tsconfigPaths from "vite-tsconfig-paths"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({rollupTypes: true})],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'bec-react-components',
      fileName: 'bec-react-components'
    },
    rollupOptions: {
      external: ["react", 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
        assetFileNames: "style.css"
      }
    }
  }
})