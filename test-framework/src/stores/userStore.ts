  /**
   * 【구조】 사용자 관련 경량 스토어 (실제 API 연동 전 템플릿)
   */
  import { defineStore } from 'pinia'
  import { ref } from 'vue'

  export const useUserStore = defineStore('userStore', () => {
    const displayName = ref<string>('Guest')
    function setDisplayName(name: string) {
      displayName.value = name
    }
    return { displayName, setDisplayName }
  })
