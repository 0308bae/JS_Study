/*
덧셈 연산자 +
뺄셈 연산자 -
곱셈 연산자 *
나눗셈 연산자 /
나머지 연산자 %
거듭제곱 연산자 **
증가 연산자 ++
감소 연산자 --

plus converts 'not string' things to string

비트 AND ( & )
비트 OR ( | )
비트 XOR ( ^ )
비트 NOT ( ~ )
왼쪽 시프트(LEFT SHIFT) ( << )
오른쪽 시프트(RIGHT SHIFT) ( >> )
부호 없는 오른쪽 시프트(ZERO-FILL RIGHT SHIFT) ( >>> )
*/

alert('1' + 2); // "12" = string
alert(2 + '1'); // "21" = string

alert(2 + 2 + '1'); // '221'이 아니라 '41'이 출력됩니다.

alert(6 - '2'); // 4, '2'를 숫자로 바꾼 후 연산이 진행됩니다.
alert('6' / '2'); // 3, 두 피연산자가 숫자로 바뀐 후 연산이 진행됩니다.

// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
alert(+true); // 1
alert(+""); // 0