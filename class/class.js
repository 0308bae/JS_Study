class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// 클래스는 함수입니다.
alert(typeof User); // function

// 정확히는 생성자 메서드와 동일합니다.
alert(User === User.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
alert(User.prototype.sayHi); // alert(this.name);

// 현재 프로토타입에는 메서드가 두 개입니다.
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

function makeClass(phrase) {
    // 클래스를 선언하고 이를 반환함
    return class {
        sayHi() {
            alert(phrase);
        };
    };
}
// 새로운 클래스를 만듦
let User = makeClass("안녕하세요.");
new User().sayHi(); // 안녕하세요.


class User {
    constructor(name) {
        // setter를 활성화합니다.
        this.name = name;
    }
  get name() {
        return this._name;
    }
  set name(value) {
        if (value.length < 4) {
            alert("이름이 너무 짧습니다.");
            return;
        }
        this._name = value;
    }
}
let user = new User("보라");
alert(user.name); // 보라
user = new User(""); // 이름이 너무 짧습니다.


class User {
    ['say' + 'Hi']() {
        alert("Hello");
    }
}
new User().sayHi();


class User {
    name = "보라";
    sayHi() {
        alert(`${this.name}님 안녕하세요!`);
    }
}
new User().sayHi(); // 보라님 안녕하세요!

class User {
    name = prompt("이름을 알려주세요.", "보라");
}
let user = new User();
alert(user.name); // 보라


class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        alert(this.value);
    }
}

let button = new Button("안녕하세요.");

setTimeout(button.click, 1000); // 안녕하세요.
