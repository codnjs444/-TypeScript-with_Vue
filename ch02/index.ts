// 타입스크립트가 해당 값을 바탕으로 추론을 수행하는 두 가지 핵심 개념 소개
// 1. 유니언 union: 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것
// 2. 내로잉 narrowing: 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것

// 1. 유니언 타입
// mathematician의 타입은?

let mathematician = Math.random() > 0.5 ? undefined : "개발자";

// 둘 다 잠재적인 타입이긴 하지만, 무조건 undefined 이거나 혹은 string인 것도 아니다.
// mathematician은 undefined이거나 string 일 수도 있다. 이렇게 "이거 혹은 저거"와 같은 타입을 유니언이라 함
// 유니언 타입은 값이 정확히 어떤 타입인지 모르지만 두 개 이상의 옵션 중 하나라는 것을 알고 있는 경우에 코드를 처리하는 훌륭한 개념이다.

// 1.1 유니언 타입 선언
// 유니언 타입 선언의 순서는 중요하지 않다.
let user: string | null = null;
// let user: null | string = null;

if (Math.random() > 0.5){
  user = "개발자";
} else {
  user = 1000;
}

// 1.2 유니언 속성
// 값이 유니언 타입일 떄, 타입스크립트는 유니언으로 선언한 모든 가능한 타입에 존재하는 멤버 속성에만 접근할 수 있다.
// 유니언 외의 타입에 접근하려고 하면 타입 검사 오류가 발생한다.

let developer = Math.random() > 0.5? "개발자" : 1000;
developer.toString();
developer.toUpperCase();
developer.toFixed();

// 2. 내로잉
// 값이 정의, 선언 혹은 이전에 유추된 것보다 더 구체적인 타입임을 코드에서 유추하는 것
// 타입스크립트가 값의 타입이 이전에 알려진 것보다 더 좁혀졌다는 것을 알게 되면 값을 더 구체적인 타입으로 취급합니다.
// 타입을 좁히는데 사용할 수 있는 논리적 검사를 타입 가드(Type Guard)라고 합니다.

// 2.1 값 할당을 내로잉
let scientist: string | number;
scientist = "개발자";
scientist.toString();
scientist.toFixed();

let inventor: number | string = "개발자";

// 2.2 조건 검사를 통한 내로잉
let teacher = Math.random() > 0.5 ? "Franklin" : 41;

if(teacher == "Franklin"){
  teacher.toUpperCase();
} else if(teacher == 51){
  teacher.toFixed();
}

teacher.toUpperCase();

// 2.3 쇼ㅔ댈 rjatkfmf xhdgks sofhdld
let researcher = Math.random() > 0.5 ? "Franklin" : 51;

if(typeof researcher == "string") {
  researcher.toUpperCase();
} else {
  researcher.toFixed();
}

if(!(typeof researcher == "string")){
  researcher.toFixed();
} else {
  researcher.toUpperCase();
}

typeof researcher == "string" ? researcher.toUpperCase() : researcher.toFixed();

// 3. 리터럴 타입
// 변수를 const로 선언하고 직접 리터럴 값을 할당하면 타입스크립트는 해당 변수를 할당된 리터럴 값으로 유추한다.
const planner = "개발자"
let designer = "개발자2"

// 유니언 타입 애너테이션에서는 리터럴과 원시 타입을 섞어서 사용할 수 있다.
// 예를 들어, lifespan은 number 타입이거나 선언된 "ongoing" 혹은 "uncertain" 값 중 하나로 나타낼 수 있다.

let lifespan: number | "ongoing" | "uncertain"

lifespan = 90;
lifespan = "ongoing"
lifespan = "uncertain"
lifespan = true

// 4. 초깃값이 없는 변수
// 자바스크립트에서 초깃값이 없는 변수는 기본적으로 undefined가 됩니다. 
// 만약, undefined를 포함하지 않는 타입으로 변수를 선언한 다음, 값을 할당하기 전에 사용하려고 시도하면 어떻게 될까요?
// 타입스크립트는 값이 할당될 때까지 변수가 undefined임을 이해할 만큼 충분히 영리하다.!

let physicist: string
physicist.length
physicist = "Mark"
physicist.length

let biologist: string | undefined
biologist?.length