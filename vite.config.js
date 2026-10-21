import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // relative asset paths: works on Vercel, Netlify and GitHub Pages sub-folders
  plugins: [react()],
  server: { port: 5173, open: false },
});
