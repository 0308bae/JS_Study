alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true

let result = 5 > 4; // 비교 결과를 변수에 할당
alert(result); // true

alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true
/*
algorithm for string compare (= dictionary order)
1. compare initial of each string
2. if initial letters same, compare next letter
3. until one side is bigger, repeat step 1 & 2.
*/

alert('2' > 1); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됩니다.
alert('01' == 1); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됩니다.

alert(true == 1); // true
alert(false == 0); // true


alert(0 == false); // true
alert(0 === false); // false, 피연산자의 형이 다르기 때문입니다.
/*
'===' compares without type convertion
*/