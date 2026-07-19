const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

const texts = [
    "😄 Rostdan ham YO'Qmi?",
    "🥺 Yana bir o'ylab ko'r...",
    "❤️ Balki 'HA' tugmasini bossang...",
    "😊 Men kutaman...",
    "🌹 Bir imkon ber..."
];

noBtn.addEventListener("mouseover", function () {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    message.innerHTML =
        texts[Math.floor(Math.random() * texts.length)];

});

yesBtn.addEventListener("click", function(){

    window.location.href = "thankyou.html";

});