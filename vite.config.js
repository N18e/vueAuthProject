import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Настраиваем алиас '@' для удобного импорта
    }
  },
  server: {
    port: 5173,       // Фиксируем порт
    strictPort: true,  // Запрещаем смену порта, если 5173 занят
    open: true,       // Автоматически открываем браузер при запуске сервера
    cors: true,       // Разрешаем CORS для API-запросов
  },
  build: {
    outDir: 'dist',          // Папка для сборки проекта
    assetsDir: 'assets',      // Папка для статических файлов
    sourcemap: true,          // Включаем sourcemaps для отладки
    chunkSizeWarningLimit: 500 // Увеличиваем лимит для больших чанков
  }
});
