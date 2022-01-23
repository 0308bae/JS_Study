// 셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션입니다.셋에 키가 없는 값이 저장됩니다.

// 주요 메서드는 다음과 같습니다.

// new Set(iterable) – 셋을 만듭니다.이터러블 객체를 전달받으면(대개 배열을 전달받음) 그 안의 값을 복사해 셋에 넣어줍니다.
// set.add(value) – 값을 추가하고 셋 자신을 반환합니다.
// set.delete(value) – 값을 제거합니다.호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
// set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
// set.clear() – 셋을 비웁니다.
// set.size – 셋에 몇 개의 값이 있는지 세줍니다.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 셋에는 유일무이한 값만 저장됩니다.
alert(set.size); // 3

for (let user of set) {
    alert(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
    alert(value);
});