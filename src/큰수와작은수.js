let a, b, c;
a = Number(prompt("첫번째 수 입력 : ", ""));
b = Number(prompt("두번째 수 입력 : ", ""));
c  = Number(prompt("세번째 수 입력 : ", ""));
if (a>b) {
    if (a>c) {
        document.write("<h2>가장 큰 수 : " + a + "</h2><br>");
    } else
        document.write("<h2>가장 큰 수 : " + c + "</h2><br>");

} else {
    if (b>c) {
        document.write("가장 큰 수 : " + b + "<br>");
    } else
        document.write("가장 큰 수 : " + c + "<br>");
}
if (a>b) {
    if (b>c) {
        document.write("가장 작은 수 : " + c + "<br>");
    } else
        document.write("가장 작은 수 : " + b + "<br>");

} else {
    if (b>c) {
        document.write("가장 작은 수 : " + c + "<br>");
    } else
        document.write("가장 작은 수 : " + a + "<br>");
}

   



