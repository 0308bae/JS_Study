let value = true;
alert(typeof value); // boolean
value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
alert(typeof value); // string


let str = "123";
alert(typeof str); // string
let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.
alert(typeof num); // number
/*while Number

undefined = NaN
null = 0
true = 1
false = 0
string = (remove space in front and back, then nothing remains = 0, something remains = read num in remain string
*/

alert(Boolean(1)); // 숫자 1(true)
alert(Boolean(0)); // 숫자 0(false)
alert(Boolean("hello")); // 문자열(true)
alert(Boolean("")); // 빈 문자열(false)
/*while Boolean

0, null, undefined, NaN, "" = false
etc = true

*/