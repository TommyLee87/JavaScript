const apply = Number(prompt("응모자 수 : "));
const win = Math.floor(Math.random() * apply + 1);
document.write(`당첨 번호는 ${win} 입니다.`);

