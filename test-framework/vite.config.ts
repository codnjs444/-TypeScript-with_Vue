  /**
   * 【구조】 Vite 설정 (Vue SFC, Vuetify 플러그인, 경로 별칭)
   */
  import { fileURLToPath, URL } from 'node:url'
  import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

  export default defineConfig({
    plugins: [
      vue({ template: { transformAssetUrls } }),
      vuetify({
        autoImport: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 5173
    }
  })
