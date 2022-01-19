function sayHi() {
    alert("Hello");
}

alert(sayHi); // 함수 코드가 보임

function sayHi() { // (1) 함수 생성
    alert("Hello");
}

let func = sayHi; // (2) 함수 복사

func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("동의하셨습니다.");
}

function showCancel() {
    alert("취소 버튼을 누르셨습니다.");
}
// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel);