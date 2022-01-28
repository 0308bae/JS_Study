let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};
setTimeout(user.sayHi, 1000); // Hello, undefined!
setTimeout(() => user.sayHi(), 1000); // Hello, John!

setTimeout(() => user.sayHi(), 1000);
// 1초가 지나기 전에 user의 값이 바뀜
user = { sayHi() { alert("또 다른 사용자!"); } };
// setTimeout에 또 다른 사용자!

let user = {
    firstName: "John"
};
function func() {
    alert(this.firstName);
}
let funcUser = func.bind(user);
funcUser(); // John