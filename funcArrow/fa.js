let sum = (a, b) => a + b;

/* 위 화살표 함수는 아래 함수의 축약 버전입니다.
let sum = function(a, b) {
  return a + b;
};
*/
alert(sum(1, 2)); // 3


let age = prompt("나이를 알려주세요.", 18);
let welcome = (age < 18) ?
    () => alert('안녕') :
    () => alert("안녕하세요!");
welcome();