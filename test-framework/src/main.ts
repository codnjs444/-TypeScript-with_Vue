  /**
   * 【구조】 앱 엔트리: Vuetify/Pinia/Router 장착
   */
  import { createApp } from 'vue'
  import { createPinia } from 'pinia'
  import { router } from '@/router'
  import { vuetify } from './plugins/vuetify'

  // 전역 스타일 & 아이콘 폰트
  import '@mdi/font/css/materialdesignicons.css'
  import '@/assets/main.scss'

  import App from '@/App.vue'

  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.use(vuetify)
  app.mount('#app')
