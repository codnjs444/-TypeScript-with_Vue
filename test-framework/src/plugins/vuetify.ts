  /**
   * 【구조】 Vuetify 인스턴스 생성 (필요 시 테마/아이콘 확장)
   */
  import 'vuetify/styles'
  import { createVuetify } from 'vuetify'

  // 아이콘 웹폰트 사용 (선택)
  // @mdi/font 설치 후 main.ts에서 CSS 임포트
  // 커스텀 테마/컴포넌트 등록은 createVuetify 옵션에 확장 가능
  export const vuetify = createVuetify({})
