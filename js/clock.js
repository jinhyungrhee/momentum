const clock = document.querySelector("h2#clock");

function getClock() {
    // Date object는 호출하는 당시의 현재 날짜와 시간을 알려줌
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 처음에 즉시 호출
getClock();
// 그리고 나서 매초마다 getClock()함수 다시 실행
setInterval(getClock, 1000);

// arg1 = function , arg2 = 시간(ms)
//setTimeout(sayHello, 5000);