/*
writable – true이면 값을 수정할 수 있습니다. 그렇지 않다면 읽기만 가능합니다.
enumerable – true이면 반복문을 사용해 나열할 수 있습니다. 그렇지 않다면 반복문을 사용해 나열할 수 없습니다.
configurable – true이면 프로퍼티 삭제나 플래그 수정이 가능합니다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능합니다.
*/

let user = {
    name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

let user = {};
Object.defineProperty(user, "name", {
    value: "John"
});
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

let user = {
    name: "John"
};
Object.defineProperty(user, "name", {
    writable: false
});
user.name = "Pete"; // Error: Cannot assign to read only property 'name'

let user = {
    name: "John",
    toString() {
        return this.name;
    }
};
Object.defineProperty(user, "toString", {
    enumerable: false
});
// 이제 for...in을 사용해 toString을 열거할 수 없게 되었습니다.
for (let key in user) alert(key); // name


let user = {};
Object.defineProperty(user, "name", {
    value: "John",
    writable: false,
    configurable: false
});
// user.name 프로퍼티의 값이나 플래그를 변경할 수 없습니다.
// 아래와 같이 변경하려고 하면 에러가 발생합니다.
//   user.name = "Pete"
//   delete user.name
//   Object.defineProperty(user, "name", { value: "Pete" })
Object.defineProperty(user, "name", { writable: true }); // Error


Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
});