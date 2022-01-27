let user = new Object(); // '객체 생성자' 문법
let user = {}; // '객체 리터럴' 문법

let user = { // 객체
    name: "John", // 키: "name",  값: "John"
    age: 30 // 키: "age", 값: 30
};

// 프로퍼티 값 얻기
alert(user.name); // John
alert(user.age); // 30

user.isAdmin = true; //프로퍼티 추가
delete user.age;

let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...등등
    };
}

let user = makeUser("John", 30);
alert(user.name); // John

let user = { name: "John", age: 30 };

alert("age" in user); // user.age가 존재하므로 true가 출력됩니다.
alert("blabla" in user); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.

let obj = {
    test: undefined
};
alert(obj.test); // 값이 `undefined`이므로, 얼럿 창엔 undefined가 출력됩니다. 그런데 프로퍼티 test는 존재합니다.
alert("test" in obj); // `in`을 사용하면 프로퍼티 유무를 제대로 확인할 수 있습니다(true가 출력됨). this is why we have to use 'in'.

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (let key in user) {
    // 키
    alert(key); // name, age, isAdmin
    // 키에 해당하는 값
    alert(user[key]); // John, 30, true
}