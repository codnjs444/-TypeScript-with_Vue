  <!-- 【구조】 기본 홈 페이지 -->
  <template>
    <section class="py-8">
      <h1 class="text-h4 font-weight-bold mb-4">Hello, Vuetify + Pinia + Vite</h1>
      <p class="text-body-1">이 페이지는 최소 구성의 홈입니다.</p>
      <div class="mt-6">
        <v-btn @click="welcome">알림</v-btn>
      </div>
    </section>
  </template>

  <script setup lang="ts">
  /**
   * 【설명】 홈 화면: 예시 버튼/텍스트
   */
  function welcome() {
    // 실무에서는 여기서 store 또는 composable 호출
    alert('구성이 완료되었습니다 🎉')
  }
  </script>
