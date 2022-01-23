let user = {
    name: "John",
    age: 30,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};
alert(user); // {name: "John", age: 30}

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
let json = JSON.stringify(student);
alert(typeof json); // 문자열이네요!
alert(json);
/* JSON으로 인코딩된 객체:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

// JSON.stringify 호출 시 무시되는 프로퍼티는 아래와 같습니다.
// 함수 프로퍼티(메서드)
// 심볼형 프로퍼티(키가 심볼인 프로퍼티)
// 값이 undefined인 프로퍼티
let user = {
    sayHi() { // 무시
        alert("Hello");
    },
    [Symbol("id")]: 123, // 무시
    something: undefined // 무시
};

alert(JSON.stringify(user)); // {} (빈 객체가 출력됨)


let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};
alert(JSON.stringify(meetup));
/* 객체 전체가 문자열로 변환되었습니다.
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/

let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup은 room을 참조합니다
};
room.occupiedBy = meetup; // room은 meetup을 참조합니다
alert(JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));

/* replacer 함수에서 처리하는 키:값 쌍 목록
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
*/

// 문자열로 변환된 배열
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert(numbers[1]); // 1

let json = `{
  name: "John",                     // 실수 1: 프로퍼티 이름을 큰따옴표로 감싸지 않았습니다.
  "surname": 'Smith',               // 실수 2: 프로퍼티 값은 큰따옴표로 감싸야 하는데, 작은따옴표로 감쌌습니다.
  'isAdmin': false                  // 실수 3: 프로퍼티 키는 큰따옴표로 감싸야 하는데, 작은따옴표로 감쌌습니다.
  "birthday": new Date(2000, 2, 3), // 실수 4: "new"를 사용할 수 없습니다. 순수한 값(bare value)만 사용할 수 있습니다.
  "friends": [0,1,2,3]              // 이 프로퍼티는 괜찮습니다.
}`;


let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
alert(meetup.date.getDate()); // 이제 제대로 동작하네요!


let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;
schedule = JSON.parse(schedule, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
alert(schedule.meetups[1].date.getDate()); // 잘 동작합니다!