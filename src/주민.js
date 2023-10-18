let jumin 
while(true) {
    jumin = prompt("주민등록번호 입력 : ", "");
    if (jumin.length != 14) {
    alert("주민등록번호의 길이는 하이픈(-) 포함 14자리 입니다.");
    } else if(jumin.indexOf("-") == -1)  {
    alert("하이픈(-)이 누락되었습니다.");
    } else break; 
}

let gender = jumin.charAt(7);
let genderType;
if(gender == "1" || gender == "3") {
    genderType = "남성";
} else {
    genderType = "여성";
}

let birthYear = jumin.substring(0, 2);
if (gender == "1"|| gender == "2") {
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear;
birthYear = Number(birthYear);

const date = new Date();
const currentYear = date.getFullYear();   //getFullYear() 현재 연도를 가지고 오는 내장함수
let age = currentYear - birthYear;

document.write("<p class='box'> 성별 : " + genderType + "<br>" + "나이 : " + age + "</p>");
