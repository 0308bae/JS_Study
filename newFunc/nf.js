let sum = new Function('a', 'b', 'return a + b');
alert(sum(1, 2)); // 3
let sayHi = new Function('alert("Hello")');
sayHi(); // Hello


function getFunc() {
    let value = "test";
    let func = function () { alert(value); };
    return func;
}
getFunc()(); // getFunc의 렉시컬 환경에 있는 값 "test"가 출력됩니다.