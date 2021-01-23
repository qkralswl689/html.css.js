document.querySelector('.button1').addEventListener('click', function(){
  let a = parseInt(document.querySelector('.number1-add1').value);
  let b = parseInt(document.querySelector('.number1-add2').value);

  document.querySelector('.number1-result1-1').value = a + b;
  document.querySelector('.number1-result1-2').value = a - b;
  document.querySelector('.number1-result1-3').value = a * b;
  document.querySelector('.number1-result1-4').value = a / b;
  document.querySelector('.number1-result1-5').value = a % b;

});
