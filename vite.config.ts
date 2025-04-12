import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000, // Change the default port from 5173 to 3000
    host: 'localhost', // Optional: explicitly set host (defaults to localhost)
    // Optionally, use an environment variable for dynamic configuration
    // port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT) : 3000,
  },
});