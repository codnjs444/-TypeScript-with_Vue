  /**
   * 【구조】 전역 앱 상태: 테마/레이아웃 등 UI 중심
   */
  import { defineStore } from 'pinia'
  import { ref, computed } from 'vue'

  export const useAppStore = defineStore('appStore', () => {
    const appTitle = ref('test-framework')
    const dark = ref(false)

    const themeName = computed(() => (dark.value ? 'dark' : 'light'))

    function toggleDark() {
      dark.value = !dark.value
    }

    return { appTitle, dark, themeName, toggleDark }
  })
