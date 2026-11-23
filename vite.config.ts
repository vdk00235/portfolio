import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'contact-page-clean-route',
      configureServer(server) {
        server.middlewares.use((request, _response, next) => {
          if (request.url === '/contact' || request.url?.startsWith('/contact?')) {
            request.url = request.url.replace('/contact', '/contact/index.html');
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((request, _response, next) => {
          if (request.url === '/contact' || request.url?.startsWith('/contact?')) {
            request.url = request.url.replace('/contact', '/contact/index.html');
          }
          next();
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        contact: 'contact/index.html',
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
