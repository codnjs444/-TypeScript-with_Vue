  /**
   * 【구조】 라우터 설정 (SPA 기본 라우트)
   */
  import { createRouter, createWebHistory } from 'vue-router'
  import type { RouteRecordRaw } from 'vue-router'

  const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: () => import('../pages/HomePage.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../pages/NotFound.vue') }
  ]

  export const router = createRouter({
    history: createWebHistory(),
    routes
  })
