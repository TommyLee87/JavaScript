// Array 객체 : 배열에서 사용할 수 있는 많은 속성과 메서드가 정의되어 있음
const arr = [10, 20, 30, 40, 50, 60];
arr.forEach(e => {
    console.log(e);
})

// toString() : 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango

// join() : 배열 안의 모든 문자를 지정한 문자를 이용해서 연결
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.join(" * ")); // Banana * Orange * Apple * Mango

//pop() : 스택 자료 구조의 특성, 배열의 마지막 데이터를 제거하고, 마지막 데이터를 반환
let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.pop()); // x = "Mango"

// push : 스택 자료 구조의 특성, 배열의 맨마지막에 데이터를 추가
fruits3.push("Kiwi");
console.log(fruits3);
console.log(fruits3.toString());

// shift() : 배열에서 첫 번째 요소를 제거하고 반환
fruits3.shift();
console.log(fruits3.toString());

// unshift() : 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
fruits3.unshift("Lemon"); 
console.log(fruits3.toString());

// 배열의 요소 변경
fruits3[0] = "Banana";
console.log(fruits3.toString());

// concat() : 2개 이상의 배열을 하나의 배열로 결합
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);

// slice() : 2개의 파라미터를 사용해 배열의 요소를 잘라냄
let fruits10 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits10.slice(3); // [Apple, Mango]
let citrus2 = fruits10.slice(1,3); // [Orange, Lemon]
console.log(citrus);
console.log(citrus2);

// sort() : 배열에 문자형 데이터가 있는 경우 오름차순으로 정렬
// reverse() : 배열에 문자형 데이터가 있는 경우 내림차순으로 정렬
let fruits30 = ["Banana", "Orange", "Apple", "Mango"];
fruits30.sort();
console.log(fruits30);
fruits30.reverse();
console.log(fruits30);

// filter() : 현재 배열에서 특정 조건을 만족하는 요소만을 찾아서 새로운 배열로 반환
let persons = [
    {
      name: "유재석",
      point: 78,
      city: "서울",
    },
    {
      name: "김종국",
      point: 92,
      city: "서울",
    },
    {
      name: "양세찬",
      point: 76,
      city: "제주",
    },
    {
      name: "하하",
      point: 81,
      city: "서울",
    },
  ];

  const pass = persons.filter(person => person.point > 80);
  console.log(pass);

  const local = persons.filter(person => person.city === "제주");
  console.log(local);

// for 사용
  let pppp = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].point >= 80) {
      pppp.push(persons[i]);
    }
  }
console.log(pppp);

// map() 메소드 : 배열의 각 요소를 변환하고, 그 결과를 새로운 배열로 반환하는 메솓 (리액트에서 가장 많이 사용)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(squaredNumbers);

const squaredNumbers2 = numbers.map(num => num * num);
console.log(squaredNumbers2);

