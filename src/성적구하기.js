// 1. 성적을 입력받아 학점 출력하기
//    - 0~100점 사이가 아니면 입력 오류
//    - 90 이상 A, 80 이상 B, 70 이상 C, 60이상 D, 나머지 F처리

let a;
a = Number(prompt("성적을 입력하세요"));
let grade;
if (a>=0 && a<=100) {
    if (a >=90) {
        grade="A";
    } else if(a >=80) {
        grade="B";
    } else if(a >=70) {
        grade="C";
    } else if(a >=60) {
        grade="D";
    } else {
        grade="F";
    } 
    document.write("<h2> 당신의 성적은 " + grade + " 입니다.</h2>")
} else {
    alert("성적을 잘못 입력 하셨습니다.");
    document.write("<h3>성적을 다시 확인해주세요.</h3>")
}

