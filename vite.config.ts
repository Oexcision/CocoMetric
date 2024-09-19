import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'CocoMetric',
        short_name: 'CocoMetric',
        description: 'Calculo de Costos con Cocomo',
        icons: [
          {
            src: '/vite.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
          {
            src: '/vite.svg',
            sizes: '512x512',
            type: 'image/svg',
          },
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
      },
    }),
  ],
});
