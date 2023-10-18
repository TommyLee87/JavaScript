// 함수 선언문 : function 키워드로 생성, 호이스팅에 영향 받음. 호출해야 실행 됨.
// let test = 10000;
// console.log(sum(10, 20))
// console.log(sum(100, 200))


// function sum(p1, p2) {
//     return test + p1 + p2;    
// }

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅 적용X, 네이밍 함수와 익명의 함수로 만들 수 있음
// const gugudan = function(dan) {
//     for(let i = 1; i<=9; i++) {
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }
// gugudan(5);
// gugudan(9);

// 화살표 함수
// const gugudan = (dan) => {
//     for(let i = 1; i<=9; i++) {
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }
// gugudan(5);
// gugudan(9);

// 기본값 할당 :
// const sum = (num1, num2 = 100) => num1 + num2;
// 자바스크립트에서는 매개변수의 수만큼 인수를 전달하지 않아도 오류 발생하지 않음
// console.log(sum(10));

// 스코프란? 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위
// let a = 10;   // 전역 스코프
// function sum() {
//     let a = 10;   // 지역 스코프이자 블록(중괄호 내부) 스코프, var의 경우function 안에 있을 때에는 해당 함수의 최상단으로 호이스팅
//     console.log(`함수 내부 : ${a}`);
// }
// sum();
// console.log(`함수 외부 : ${a}`);

// var a = 10;
// {
//     var b = 20;  // 지역 스코프이자 블록(중괄호 범위 안) 스코프, var의 경우 그냥 {} 내부일 때는 전역으로 호이스팅 됨.
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);    
// }
// console.log(`코드 블록 외부 a : ${a}`);
// console.log(`코드 블록 외부 b : ${b}`);    

// 참조 우선순위
// let a = 10;
// const b = 20;
// function sum() {
//     let a = 50;
//     const b = 70;
//     console.log(`함수 내부 a : ${a}`)
//     console.log(`함수 내부 b : ${b}`)
// }
// sum();

let a = 10;
let b = 20;
{
    let a = 30;
    let b = 40;
    console.log(`함수 내부 a : ${a}`);
    console.log(`함수 내부 b : ${b}`);
}

// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행되는 함수
(function() {
    Init();
})();
function Init() {
    console.log("초기화 루틴을 수행합니다.");
    let defaultUrl = "127.0.0.1";
    let defaultPort = "3030";

    for (let i = 0; i < 100; i++) {
        console.log(i);
        
    }
}
