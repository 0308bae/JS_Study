// 이름과 성을 요소로 가진 배열
let arr = ["Bora", "Lee"]
// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;
alert(firstName); // Bora
alert(surname);  // Lee
let [firstName, surname] = "Bora Lee".split(' ');

let [firstName, surname] = [];
alert(firstName); // undefined
alert(surname); // undefined

// name의 prompt만 실행됨
let [surname = prompt('성을 입력하세요.'), name = prompt('이름을 입력하세요.')] = ["김"];
alert(surname); // 김 (배열에서 받아온 값)
alert(name);    // prompt에서 받아온 값

let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let { title, width, height } = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

let options = {
    title: "Menu",
    height: 200,
    width: 100
};
// title = 이름이 title인 프로퍼티
// rest = 나머지 프로퍼티들
let { title, ...rest } = options;
// title엔 "Menu", rest엔 {height: 200, width: 100}이 할당됩니다.
alert(rest.height);  // 200
alert(rest.width);   // 100


let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
let {
    size: { // size는 여기,
        width,
        height
    },
    items: [item1, item2], // items는 여기에 할당함
    title = "Menu" // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;
alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut