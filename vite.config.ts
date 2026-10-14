import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base '/' is correct for a user site at https://nishant9334.github.io
export default defineConfig({
  plugins: [react()],
  base: '/',
});
