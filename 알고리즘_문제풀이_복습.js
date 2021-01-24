document.querySelector('.button1').addEventListener('click', function(){
  let a = parseInt(document.querySelector('.number1-add1').value);
  let b = parseInt(document.querySelector('.number1-add2').value);

  document.querySelector('.number1-result1-1').value = a + b;
  document.querySelector('.number1-result1-2').value = a - b;
  document.querySelector('.number1-result1-3').value = a * b;
  document.querySelector('.number1-result1-4').value = a / b;
  document.querySelector('.number1-result1-5').value = a % b;

});

document.querySelector('.button2').addEventListener('click',function(){
let c = parseInt(document.querySelector('.number2-add1').value);
let d = parseInt(document.querySelector('.number2-add2').value);

if(c>d){
  document.querySelector('.number2-result2-1').value = c;
}else{
  document.querySelector('.number2-result2-1').value = d;
}

});

document.querySelector('.button3').addEventListener('click',function(){

  let year = parseInt(document.querySelector('.number3-add1').value);
  if(year%4 == 0 && year != 0 || year%400 == 0){
    document.querySelector('.number3-result3-1').value = '맞습니다'
  }else{
    document.querySelector('.number3-result3-1').value = '아닙니다'
  }

});
document.querySelector('.button4').addEventListener('click',function(){
  let n = parseInt(document.querySelector('.number4-1').value);
  let sum = 0;

  for(let i=1; i<=n; i++){
    document.querySelector('.result-number4').append(i);
    sum += i;
  }
  document.querySelector('.result4-1').value = sum;

});

document.querySelector('.button5').addEventListener('click',function(){
  let e = parseInt(document.querySelector('.number5-add1').value);

  let f = parseInt(document.querySelector('.number5-add2').value);

  for(let i=1; i<=e; i++){

  if(i<f){
    document.querySelector('.result-number5').append(i);
  }
}
});
