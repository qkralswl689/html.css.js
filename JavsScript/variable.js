'use strict'; //js를 엄격하게 사용하기위해 선언

// 1. variable : 변수 -> 변경될 수 있는 값 (mutable)
// let (added in Es6) -> 변수를 선언하기 위한 키워드

let name = 'ming';
console.logg(name);
name = 'hello';
console.log(name);

// 2. Block scope : {} -> 코드를 블럭{} 안에 작성하게 되면 => 블럭 밖에서는 해당 함수를 불러오지 못한다

{
    let name = 'ming';
    console.logg(name);
    name = 'hello';
    console.log(name);
}
console.log(name); // 아무런 값도 출력되지 않는다

// global 함수 : 어느곳에서나 접근이 가능하다 : {} 밖, 최상단에 선언

// * hoisting (호이스팅)이란 : 어디에 선언했는지와 상관없이 항상 제일 위로 선언을 끌어 올려주는 것 (move declaration from bottom to top)

// 3. Constant : 한번 값을 할당하면 값이 절대 바뀌지 않는것 => immutable
// favor immutable data type always for a few reasons :
// - security (보안성)
// - thread safety(동시에 접근을 하지 않는다)
// - reduce human mistake

const daysInweek = 7;

// 4. Variable types : number,String,boolean,function ...

// 5. Dynamic typing : dynamically typed language

