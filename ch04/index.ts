// 함수
// 한쪽 끝에는 함수 인수/인자가 있고, 다른 쪽 끝에는 반환 타입이 있다.

// 1. 함수 매개변수
// sing 함수를 작성한 개발자가 song 매개변수를 제공하기 위해 의도한 값의 타입은?
// 명시적 타입 정보가 선언되지 않으면 절대 타입을 절대 알 수 없다.
// 타입스크립트가 이를 any 타입으로 간주하며 매개변수의 타입은 무엇이든 될 수 있다.

function sing1(song){
  console.log('Singing: ${song}!')
}

function sing2(song: string) {
  console.log('Singing: ${song}!')
}

// 1.1 필수 매개변수
// 자바스크립트에서는 인수의 수와 상관없이 함수를 호출 할 수 있다. 
// 타입스크립트는 함수에 선언된 모든 매개변수가 필수라고 가정

function sing3(first, second){
  console.log('${first} and ${second}')
}

sing3("첫번째 인자")
// sing3("첫번쨰 인자", "두번째 인자")

  // 매개변수는 인수로 받은 것으로 예상되는 함수의 선언을 나타낸다.
  // 인수는 함수를 호출할 때, 매개변수에 제공하는 값을 나타낸다.


// 1.2 선택적 매개변수
// 자바스크립트에서 함수 매개변수가 제공되지 않으면 함수 내부의 인수값은 undefined로 기본값이 설정된다.
// 때로는 함수 매개변수를 제공할 필요가 없을 때 있고, undefined 값을 위해 의도적으로 사용할 수도 있다.
// 타입스크립트가 이러한 선택적 매개변수에 인수를 제공하지 못하는 경우, 타입 오류를 보고하지 않았으면 할 떄도 있따.
// 타입스크립트에서는 선택적 객체 타입 속성과 유사하게 타입 애너테이션 : 앞에 ? 를 추가해 매개변수가 선택적이라고 표시한다.
// 선택적 매개변수는 항상 | undefined가 유니언 타입으로 추가되어 있다.

function announceSong(song: string, singer?: string) {
  console.log("song:", song);

  if (singer) {
    console.log("singer:", singer);
  }
}

announceSong("봄")
announceSong("봄", undefined)
announceSong("거짓말", "하루하루")

// 선택적 매개변수는 항상 암묵적으로 undefined가 될 수 있다.
// 선택적 매개변수는 | undefined를 포함하는 유니언 타입 매개변수와는 다르다.
// ?로 표시된 선택적 매개변수가 아닌 매개변수는 값이 명시적으로 undefined일지라도 항상 제공되어야 한다.

function announceSongBy(song: string, singer: string | undefined){
  console.log("song:", song)

  if(singer){
    console.log("singer:", singer)
  }
}

// 1.3 나머지 매개변수
// ...스프레드 연산자는 함수 선언의 마지막 매개변수에 위치하고,
// 해당 매개변수에서 시작해 함수에 전달된 '나머지' 인수가 모두 단일 배열에 저장되어야 함을 나타냄

function singALlTheSongs(singer: string, ...songs: string[]){

}

//9번째 강의 까지 확인