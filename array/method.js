/*
arr.push(...items) – 맨 끝에 요소 추가
arr.pop() – 맨 끝 요소 제거
arr.shift() – 맨 앞 요소 제거
arr.unshift(...items) – 맨 앞에 요소 추가
*/

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // 인덱스 1부터 요소 한 개를 제거
alert(arr); // ["I", "JavaScript"]

let arr = ["I", "study", "JavaScript", "right", "now"];
// 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체합니다.
arr.splice(0, 3, "Let's", "dance");
alert(arr) // now ["Let's", "dance", "right", "now"]

let arr = ["I", "study", "JavaScript"];
// 인덱스 2부터
// 0개의 요소를 삭제합니다.
// 그 후, "complex"와 "language"를 추가합니다.
arr.splice(2, 0, "complex", "language");
alert(arr); // "I", "study", "complex", "language", "JavaScript"

let arr = ["t", "e", "s", "t"];

alert(arr.slice(1, 3)); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))
alert(arr.slice(-2)); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)

let arr = [1, 2];
// arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열이 만들어집니다.
alert(arr.concat([3, 4])); // 1,2,3,4
// arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어집니다.
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});

let arr = [1, 0, false];
alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true

let result = arr.find(function (item, index, array) {
    // true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
    // 조건에 해당하는 요소가 없으면 undefined를 반환합니다.
});

let results = arr.filter(function (item, index, array) {
    // 조건을 충족하는 요소는 results에 순차적으로 더해집니다.
    // 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환됩니다.
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6