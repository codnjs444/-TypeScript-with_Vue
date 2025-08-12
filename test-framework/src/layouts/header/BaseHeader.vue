  <!-- 【구조】 공통 헤더 (레이아웃 상단) -->
  <template>
    <v-app-bar density="comfortable" flat>
      <v-container class="d-flex align-center" style="max-width: var(--app-max-width);">
        <v-app-bar-title>{{ title }}</v-app-bar-title>
        <v-spacer />
        <v-btn variant="text" :to="{ name: 'home' }">Home</v-btn>
        <v-divider vertical class="mx-2" />
        <v-btn :icon="dark ? 'mdi:mdi-weather-sunny' : 'mdi:mdi-weather-night'" @click="toggleDarkMode" />
      </v-container>
    </v-app-bar>
  </template>

  <script setup lang="ts">
  /**
   * 【설명】 앱 공통 헤더: 제목과 다크토글 제공
   */
  import { computed } from 'vue'
  import { useAppStore } from '@/stores/appStore'

  const app = useAppStore()
  const title = computed(() => app.appTitle)
  const dark = computed(() => app.dark)
  function toggleDarkMode() {
    app.toggleDark()
  }
  </script>
