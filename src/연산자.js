// 비교 연산자
// 동등 연산자
console.log(1 == "1");
console.log(1 == true);
console.log(0 == false);
// 부등 연산자
console.log(1 != "1");
console.log(1 != true);
console.log(0 != false);

// 일치 연산자(===) : 두 값이 같은지를 비교하는데 데이터 타입까지 함께 확인
console.log(1 === "1");
console.log(1 === true);
console.log(0 === false);

console.log(1 !== "1");
console.log(1 !== true);
console.log(0 !== false);

// 형변환 : 묵시적 형변환과 명시적 형변환이 있음
let num1 = 10 +Number("10");
console.log(num1);

// 반복문 : 자바스크립트에서 반복문은 while, do-while, for, for-in, for-of
// let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
// for (let i = 0; i < brands.length; i++) {
//     console.log(brands[i]);
// } 
// 고객이 구입 가능한 음료 리스트 구하기
let productList = [
    {
        name: "레쓰비",
        price: 700},
    {
        name: "티오피",
        price: 1000
    },
    {
        name: "비타500",
        price: 800

    },
    { 
        name: "포카리스웨트",
        price: 1000

    },
    {
        name: "파워웨이드",
        price: 1200

    }
];
let inputCoin = 800;
let outPutList = [ ];  // 빈 배열 생성
for(let i = 0; i <productList.length; i++) {
    if(productList[i].price <= inputCoin) {
        outPutList.push(productList[i]);  // 배열의 마지막에 새로운 요소 추가
    }
}
console.log(outPutList);

// for-in : 객체의 프로퍼티를 열거하는데 사용
let person = {
    fname: "Jhon",
    lname: "Doe",
    age: 25
};
for(let key in person) {
    console.log(person[key]); // 키 값을 이용해 해당하는 값 출력
}

// for-of : 향상된 for문
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for(let e of brands) {
    console.log(e);
}