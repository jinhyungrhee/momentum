function onGeoOk(position) {
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6ef55412dd32732c3b354a9c9ea9e565&units=metric`
    console.log(url);
    // URL 부르기(요청하기)
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);