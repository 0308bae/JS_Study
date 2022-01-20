let user = {
    name: "John",
    age: 30
};

user.sayHi = function() {
    alert("안녕하세요!");
};
// 아래 두 객체는 동일하게 동작합니다.
user = {
    sayHi: function() {
        alert("Hello");
    }
};
// 단축 구문을 사용하니 더 깔끔해 보이네요.
user = {
    sayHi() { // "sayHi: function()"과 동일합니다.
        alert("Hello");
    }
};

user.sayHi();

function sayHi() {
    alert(this.name);
}