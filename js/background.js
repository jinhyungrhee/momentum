const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// img태그 생성
const bgImage = document.createElement("img");

// img태그 src속성에 대한 값 설정
//bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url('img/${chosenImage}')`;

// JavaScript에서 HTML element 생성(<img src="img/0.jpg">)
// console.log(bgImage);

// body 안에 추가하기
document.body.appendChild(bgImage);