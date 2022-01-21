let arr = new Array();
let arr = [];
let fruits = ["사과", "오렌지", "자두"];

alert(fruits[0]); // 사과
alert(fruits[1]); // 오렌지
alert(fruits[2]); // 자두

alert(fruits.pop()); // 배열에서 "배"를 제거하고 제거된 요소를 얼럿창에 띄웁니다.
fruits.push("배");

// 배열 요소를 대상으로 반복 작업을 수행합니다.
for (let fruit of fruits) {
    alert(fruit);
}

let fruits = [];
fruits[123] = "사과";
alert(fruits.length); // 124

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
alert(matrix[1][1]); // 5, 중심에 있는 요소

let arr = [1, 2, 3];
alert(arr); // 1,2,3
alert(String(arr) === '1,2,3'); // true

