import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  define: {
    __API__: JSON.stringify('https://amed.boats/'),
    __IS_DEV__: JSON.stringify(true),
  },
  plugins: [react(), svgr({ exportAsDefault: true })],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    port: 3000,
  },
});
