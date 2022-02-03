let animal = {
    eats: true,
    walk() {
        alert("동물이 걷습니다.");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
// 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
rabbit.walk(); // 동물이 걷습니다.


let animal = {
    walk() {
        if (!this.isSleeping) {
            alert(`동물이 걸어갑니다.`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};
let rabbit = {
    name: "하얀 토끼",
    __proto__: animal
};
// rabbit에 새로운 프로퍼티 isSleeping을 추가하고 그 값을 true로 변경합니다.
rabbit.sleep();
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (프로토타입에는 isSleeping이라는 프로퍼티가 없습니다.)

let animal = {
    eats: true
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
// Object.keys는 객체 자신의 키만 반환합니다.
alert(Object.keys(rabbit)); // jumps
// for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
for (let prop in rabbit) alert(prop); // jumps, eats
for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        alert(`객체 자신의 프로퍼티: ${prop}`); // 객체 자신의 프로퍼티: jumps
    } else {
        alert(`상속 프로퍼티: ${prop}`); // 상속 프로퍼티: eats
    }
}