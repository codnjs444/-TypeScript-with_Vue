  <!-- 【구조】 기본 레이아웃: 헤더 + 메인 + 푸터(옵션) -->
  <template>
    <v-app>
      <AppHeader />
      <v-main>
        <v-container style="max-width: var(--app-max-width);">
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </template>

  <script setup lang="ts">
  /**
   * 【설명】 애플리케이션 기본 레이아웃
   */
  import AppHeader from '@/layouts/header/AppHeader.vue'
  </script>
