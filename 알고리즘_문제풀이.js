// console.log('1.---------------');

document.querySelector('.button1').addEventListener('click',function(){
let a1 = parseInt(document.querySelector('.number1-1').value); // value -> 입력된 값 , 입력된 값을 가져와서 할당 ,parseInt -> 택스트를 숫자로 형변환
let b1 = parseInt(document.querySelector('.number1-2').value);

document.querySelector('.result1-1').value = a1 + b1;  // 계산식을 할당
document.querySelector('.result1-2').value = a1 - b1;
document.querySelector('.result1-3').value = a1 * b1;
document.querySelector('.result1-4').value = a1 / b1;
document.querySelector('.result1-5').value = a1 % b1;
}); // 이벤트리스너 할당



// console.log('더하기 : ' + (a1 + b1) );
// console.log('빼기 : ' + (a1 - b1) );
// console.log('곱하기 : ' + (a1 * b1) );
// console.log('나누기 : ' + (a1 / b1) );
// console.log('나머지값 : ' + (a1 % b1) );

// console.log('2.---------------');

document.querySelector('.button2').addEventListener('click', function(){
let a2 = parseInt(document.querySelector('.number2-1').value);
let b2 = parseInt(document.querySelector('.number2-2').value);

if(a2 > b2){
  //true
  // console.log('큰값은 : ' + a2 + '입니다.');
  document.querySelector('.result2-1').value = a2;
}else {
  //false
  // console.log('큰값은 : ' + b2 + '입니다.');
  document.querySelector('.result2-1').value =  b2 ;
}
});


// console.log('3.---------------');

document.querySelector('.button3').addEventListener('click', function(){
  let year = parseInt(document.querySelector('.number3-1').value);
if(year%4 == 0 && year%100 != 0 || year%400 == 0){
  // true
  // console.log('맞습니다');
  document.querySelector('.result3-1').value = '맞습니다';
} else {
  // false
  // console.log('아닙니다');
  document.querySelector('.result3-1').value = '아닙니다';
}

});

// console.log('4.---------------');
document.querySelector('.button4').addEventListener('click', function(){
  let number = parseInt(document.querySelector('.number4-1').value);
let sum = 0;

for(let i=1; i<=number; i++){
  // console.log('N : ' +i);
  document.querySelector('.result-number4').append(i); // 기존의 값을 유지하면서 새로운 값을 계속 추가(누적)할때 쓰는 함수-> append
  // 1+2+3+4+5+6+7+8+9+10
  sum += i;
}
// console.log('합계 : ' + sum);
document.querySelector('.result4-1').value = sum;

});



console.log('5.---------------');
let A = 10;
let B = 5;
for(let i=1; i<=A; i++){
  if(i<B){
     console.log(i);
  }
}

console.log('6.---------------');

let a6 =40;
let number1 =0;
let number10 =0;
let clap = 0;

for(let i=1; i<a6; i++){
 //1의자리, 10의 자리 분리
 number1 = i % 10;
 number10 = ( i - number1 ) / 10;

 // 각 자리가 3의 배수인지 체크,박수횟수 증가
 if(number1 != 0 && number1 % 3 == 0){
  clap += 1
   console.log(i);
 }
 if(number10 != 0 && number10 % 3 == 0){
  clap += 1;
   console.log(i);
 }

}
console.log(clap);

console.log('7.---------------');

let a7 = 156;
let digit = 0;
let n1 = 0;

n1 = 156;

while( n1 > 0 ){

  // 156 / 1 = 156 : 156 / 1 =156
  // 156 / 10 = 15 : 156 / 10 = 15
  // 15 / 10 = 1   : 156 / 100 = 1
  // 1 / 10 = 0    : 156 / 1000 = 0

  // 내림

  n1 = Math.floor(n1 /10); //1

  digit++;

  console.log(n1);

}
console.log(10**(digit-1) + '의 자리수');

  console.log('8.---------------');


let m = 0;
let result = 0;
let count = [0,0,0,0,0,0,0,0,0,0]; // 배열변수 생성 -> 인덱스 10개짜리

for(let i=1; i<=1000; i++){

  m = i;

  while(m>0){

    result = m % 10;

    // result : 0 => 0의 개수 카운트 +1
    // result : 1 => 1의 개수 카운트 +1
    // result : 2 => 2의 개수 카운트 +1
    // result : 3 => 3의 개수 카운트 +1
    // ...

    switch(result){
      case 0:
        // 0일때 0의 개수
        count[0]++;
        break;
      case 1:
        // 1일때 1의 개수
        count[1]++;
          break;
      case 2:
        count[2]++;
        break;
      case 3:
        count[3]++;
          break;
      case 4:
        count[4]++;
        break;
      case 5:
        count[5]++;
        break;
      case 6:
        count[6]++;
        break;
      case 7:
        count[7]++;
        break;
      case 8:
        count[8]++;
        break;
      case 9:
        count[9]++;
        break;

    };

    m = Math.floor(m /10);

  };

};
for(let i=0; i<10; i++){
  console.log(i + ' : ' + count[i] + '개');
};
