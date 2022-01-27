var gVar = 5;
alert(window.gVar); // 5 (var로 선언한 변수는 전역 객체 window의 프로퍼티가 됩니다)
// 모든 스크립트에서 현재 사용자(current user)에 접근할 수 있게 이를 전역 객체에 추가함

window.currentUser = {
    name: "John"
};
// 아래와 같은 방법으로 모든 스크립트에서 currentUser에 접근할 수 있음
alert(currentUser.name);  // John
// 지역 변수 'currentUser'가 있다면
// 지역 변수와 충돌 없이 전역 객체 window에서 이를 명시적으로 가져올 수 있음
alert(window.currentUser.name); // John

