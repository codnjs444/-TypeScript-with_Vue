// 1. 객체 타입
// { ... } 구문을 사용해서 객체 리터럴을 생성하면, 타입스크립트는 해당 속성을 기반으로 새로운 객체 타입 또는 타입 형태를 고려한다.
// 해당 객체 타입은 객체의 값과 동일한 속성명과 원시 타입을 갖는다.

const poet = {
  born: 1935,
  name: "개발자",
}

poet["born"]; // 타입 : number
poet.name; // 타입: string
poet.nationality 

// 1.1 객체 타입 선언
// 기존 객체에서 직접 타입을 유추하는 방법도 굉장히 좋지만, 결국에는 객체의 타입을 명시적으로 선언하고 싶다.!
// 명시적으로 타입이 선언된 객체에는 별도로 객체의 형태를 설명하는 방법이 필요하다.

let author: {
  born: number
  name: string
}

author = {
  born: 1935,
  name: "hello"
}
author = "hello, world"

// 1.2 별칭 객체 타입
// { born: number, name: string } 과 같은 객체 타입을 계속 작성하는 것은 매우 귀찮다.
// 각 객체 타입에 타입 별칭을 할당해 사용하는 방법이 더 일반적이다.

type Poet = {
  born: number
  name: string
}

let poetLater : Poet
poetLater = {
  born: 1935,
  name: "Mary"
}
poetLater = "Hello, World!"


// 2. 구조적 타이핑
// 타입스크립트의 타입 시스템은 구조적으로 타입화(structually typed) 되어 있다.
// 즉, 타입을 충족하는 모든 값을 해당 타입의 값으로 사용할 수 있다.
// 매개변수나 변수가 특정 객체 타입으로 선언되면, 타입스크립트에 어떤 객체를 사용하든 해당 속성이 있어야 한다고 말해야 한다. 

type WithFirstName = {
  firstname: string;
};

type WithLastName = {
  lastname: string;
}

const hasBoth = {
  firstname: "ㅎㅇ",
  lastname: "hello"
}

let withFirstName: WithFirstName = hasBoth
let WithLastName: WithLastName = hasBoth

// 2.4 선택적 속성
// 모든 객체에 객체 타입 속성이 아닙니다. 타입의 속성 애너테이션에서 : 앞에 ?를 추가하면 선택적 속성임을 알 수 있다.
type Book = {
  author?: string
  pages: number
}

const ok: Book = {
  author: "개발자",
  pages: 80
}

const missing: Book = {
  pages: 50
}

type Writers = {
  author: string | undefined
  editor?: string
}

const hasRequired: Writers = {
  author: undefined
}

const missingRequired: Writers = {}

// 선택적 속성과 undefined를 포함한 유니언 타입의 속성 사이에는 차이가 있다!
// ?를 사용해 선택적으로 선언된 속성은 존재하지 않아도 된다.
// 그러나 필수로 선언된 속성과 | undefined는 그 값이 undefined 일지라도 반드시 존재해야 한다.

// 3. 객체 타입 유니언
// 타입스크립트 코드에서는 속성이 조금 다른, 하나 이상의 서로 다른 객체 타입이 될 수 있는 ㅏㅌ입을 설명할 수 있어야 한다.
// 또한, 속성값을 기반으로 해당 객체 타입 간에 타입을 좁혀야 할 수도 있다.

// 3.1 유추된 객체 타입 유니언 
// 변수에 여러 객체 타입 중 하나가 될 수 있는 초깃값이 주어지면 타입스크립트는 해당 타입을 객체 타입 유니언으로 유추한다.
// 유니언 타입은 가능한 각 객체 타입을 구성하고 잇는 요소를 모두 가질 수 있다.

type BookWithPages = {
  name: string
  pages: number
};

type BookWithRhymes = {
  name: string
  rhymes: boolean
}

type Book2 = BookWithPages | BookWithRhymes


const book2: Book2 = 
  Math.random()>0.5
  ?{
    name:"개발자",
    pages: 70,
  }
  :{
    name: "멋진 개발자",
    rhymes: true
  }

// 3.2 교차 타입
// 타입스크립트 유니언 타입은 둘 이상의 다른 타입 중 하나의 타입이 될 수 있음을 나타낸다.

type Artwork = {
  genre: string
  name: string
}

type Writing = {
  pages: number;
  name: string
}

type WrittenArt = Artwork & Writing
type WrittenrArt = {
  name: string
  genre: string
  pages: number
}