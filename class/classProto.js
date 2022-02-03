class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name}가 멈췄습니다.`);
    }
}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name}가 숨었습니다!`);
    }
    stop() {
        super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
        this.hide(); // 숨습니다.
    }
}

let rabbit = new Rabbit("흰 토끼");
rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!


class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    // ...
}
class Rabbit extends Animal {

    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
    // ...
}
// 이제 에러 없이 동작합니다.
let rabbit = new Rabbit("흰 토끼", 10);
alert(rabbit.name); // 흰 토끼
alert(rabbit.earLength); // 10