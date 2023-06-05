import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import Inspect from 'vite-plugin-inspect';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: { port: 3000 },
  plugins: [react(), svgr(), tsconfigPaths(), Inspect()],
  build: {
    sourcemap: true,
    outDir: 'build',
  },
});
