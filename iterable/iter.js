let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};
for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}
// 각 숫자를 제곱
let arr = Array.from(range, num => num * num);
alert(arr); // 1,4,9,16,25


for (let char of "test") {
    // 글자 하나당 한 번 실행됩니다(4회 호출).
    alert(char); // t, e, s, t가 차례대로 출력됨
}
let str = '𝒳😂';
for (let char of str) {
    alert(char); // 𝒳와 😂가 차례대로 출력됨
}

let str = "Hello";
// for..of를 사용한 것과 동일한 작업을 합니다.
// for (let char of str) alert(char);
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // 글자가 하나씩 출력됩니다.
}