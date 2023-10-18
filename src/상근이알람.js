// parseInt() 함수 필요 : 결과값을 정수로 반환
// 1. prompt를 사용해 시간, 분 입력 받기
// 2. 입력받은 시간을 붙으로 환산하고 45분을 빼기
// 3. 만약 45분 뺀 시간이 이전 날짜로 되는 경우는 24시간 만큼 더해주기
// 4. 계산된 분은 다시 시간과 분으로 환산해서 document.write로 출력시 템플릿 문자열을 사용하여 출력 `${}`

let hour, min, awake;
hour = Number(prompt("시간 입력 : "));
min = Number(prompt("분 입력 : "));
awake = hour * 60 + min - 45;
if (awake < 0) {
    awake = 24*60 + min-45;
}

hour = parseInt(awake/60);
min = awake % 60;

document.write(`알람 시간은 ${hour}시 ${min}분 입니다.`)