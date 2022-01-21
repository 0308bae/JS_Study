let single = '작은따옴표';
let double = "큰따옴표";
let backticks = `백틱`;

let guestList = `손님:
 * John
 * Pete
 * Mary
`;
let guestList = "손님:\n * John\n * Pete\n * Mary";
alert(guestList); // 손님 리스트를 여러 줄에 걸쳐 작성함

let str1 = "Hello\nWorld"; // '줄 바꿈 기호'를 사용해 두 줄짜리 문자열을 만듦
// 백틱과 일반적인 줄 바꿈 방법(엔터)을 사용해 두 줄짜리 문자열을 만듦
let str2 = `Hello
World`;
alert(str1 == str2); // true

alert("\u00A9"); // ©
alert("\u{20331}"); // 佫, 중국어(긴 유니코드)
alert("\u{1F60D}"); // 😍, 웃는 얼굴 기호(긴 유니코드)
//long unicodes need to wrap with braces

alert('I\'m the Walrus!'); // I'm the Walrus!
alert(`I'm the Walrus!`); // I'm the Walrus!

let str = `Hello`;
// 첫 번째 글자
alert(str[0]); // H
alert(str.charAt(0)); // H
// 마지막 글자
alert(str[str.length - 1]); // o

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char는 순차적으로 H, e, l, l, o가 됩니다.)
}

let str = 'Widget with id';
alert(str.indexOf('Widget')); // 0, str은 'Widget'으로 시작함
alert(str.indexOf('widget')); // -1, indexOf는 대·소문자를 따지므로 원하는 문자열을 찾지 못함
alert(str.indexOf("id")); // 1, "id"는 첫 번째 위치에서 발견됨 (Widget에서 id)

let str = "Widget";
if (~str.indexOf("Widget")) {
    alert('찾았다!'); // 의도한 대로 동작합니다.
}

let str = "stringify";
alert(str.slice(0, 5)); // 'strin', 0번째부터 5번째 위치까지(5번째 위치의 글자는 포함하지 않음)
alert(str.slice(0, 1)); // 's', 0번째부터 1번째 위치까지(1번째 위치의 자는 포함하지 않음)

let str = "stringify";

// 동일한 부분 문자열을 반환합니다.
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"
// slice를 사용하면 결과가 다릅니다.
alert(str.slice(2, 6)); // "ring" (같음)
alert(str.slice(6, 2)); // "" (빈 문자열)

// 글자는 같지만 케이스는 다르므로 반환되는 코드가 다릅니다.
alert("z".codePointAt(0)); // 122
alert("Z".codePointAt(0)); // 90

