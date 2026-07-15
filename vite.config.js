import { realpathSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: realpathSync('.'),
  plugins: [react(), tailwindcss()],
  base: '/',
});
