if (true) {
    let phrase = "안녕하세요!";
    alert(phrase); // 안녕하세요!
}
alert(phrase); // ReferenceError: phrase is not defined


function sayHiBye(firstName, lastName) {

    // 헬퍼(helper) 중첩 함수
    function getFullName() {
        return firstName + " " + lastName;
    }
    alert("Hello, " + getFullName());
    alert("Bye, " + getFullName());
}


function f() {
    let value = 123;
    return function () {
        alert(value);
    }
}
let g = f(); // g.[[Environment]]에 f() 호출 시 만들어지는
// 렉시컬 환경 정보가 저장됩니다.


let value = "이름이 같은 다른 변수";

function f() {
    let value = "가장 가까운 변수";
    function g() {
        debugger; // 콘솔에 alert(value);를 입력하면 '이름이 같은 다른 변수'가 출력됩니다.
    }
    return g;
}
let g = f();
g();