// n개의 정수 입력받아 n * n 출력
// CSS 적용해서 출력
// ex : 3입력
// 1 2 3
// 4 5 6
// 7 8 9

let n;
n = Number(prompt("정수 n 입력"));
for (let i=1; i <= n * n; i++) {
    document.write("<span class=nbyn>" + i + " " + "</span>");
    if(i%n==0) {
    document.write("<br>");
    }
}
