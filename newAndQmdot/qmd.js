//?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.
let user = {}; // 주소 정보가 없는 사용자
alert(user?.address?.street); // undefined, 에러가 발생하지 않습니다.