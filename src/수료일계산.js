const dDay = new Date("2024-02-21");
const toDay = new Date();

const remain = dDay.getTime() - toDay.getTime();
const remainDay = Math.ceil(remain/(1000*60*60*24));
console.log(remainDay);

// document.write("D-day까지 " + "<span>" + remainDay + "</span>"+ "일 남았습니다.")
document.querySelector('#result').innerHTML = remainDay;




