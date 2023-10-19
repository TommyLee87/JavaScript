// // 날짜와 시간을 다루는 Date 객체
// const date = new Date();
// console.log(date);

// // 날짜를 직접 정할 때
// const date2 = new Date("2022-11-27");
// console.log(date2);

// // 이런 방식으로는 사용 X
// const date3 = new Date(2022, 11, 27);
// console.log(date3);

// // 시간까지 지정
// const date4 = new Date("2022/11/27/18:00:00");
// console.log(date4);

const myDate = new Date();
console.log(myDate.getFullYear()); // 현재 연도 출력
console.log(myDate.getMonth()+1); // 현재 월 출력
console.log(myDate.getDate()); // 현재 날짜 출력
console.log(myDate.getDay()); // 현재 요일 출력
console.log(myDate.getHours()); // 현재 시간 출력
console.log(myDate.getMinutes()); // 현재 분 출력
console.log(myDate.getSeconds()); // 현재 초 출력
console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력


