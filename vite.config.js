import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/skill3/',  // 👈 important!
  plugins: [react()],
});
