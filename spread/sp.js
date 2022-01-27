function sumAll(...args) { // args는 배열의 이름입니다.
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6


function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName); // Bora Lee
    // 나머지 인수들은 배열 titles의 요소가 됩니다.
    // titles = ["Software Engineer", "Researcher"]
    alert(titles[0]); // Software Engineer
    alert(titles[1]); // Researcher
    alert(titles.length); // 2
}
showName("Bora", "Lee", "Software Engineer", "Researcher");


function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);
    // arguments는 이터러블 객체이기 때문에
    // for(let arg of arguments) alert(arg); 를 사용해 인수를 펼칠 수 있습니다.
}
// 2, Bora, Lee가 출력됨
showName("Bora", "Lee");
// 1, Bora, undefined가 출력됨(두 번째 인수는 없음)
showName("Bora");


let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15 (0, arr, 2, arr2 순서로 합쳐집니다.)


let str = "Hello";
alert([...str]); // H,e,l,l,o


let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // 객체를 펼쳐서 각 요소를 분리후, 매개변수 목록으로 만든 다음에
// 매개변수 목록을 새로운 객체에 할당함
// 객체 복사본의 프로퍼티들이 기존 객체의 프로퍼티들과 진짜 같을까요?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
// 두 객체는 같을까요?
alert(obj === objCopy); // false (참조가 다름)
// 참조가 다르므로 기존 객체를 수정해도 복사본은 영향을 받지 않습니다.
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}