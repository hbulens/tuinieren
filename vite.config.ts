import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://hbulens.github.io/tuinieren/
export default defineConfig({
  base: '/tuinieren/',
  plugins: [react()],
});
