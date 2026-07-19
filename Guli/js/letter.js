const envelope=document.getElementById("envelope");

const cover=document.querySelector(".cover");

const paper=document.querySelector(".paper");

const button=document.getElementById("continueBtn");

envelope.onclick=function(){

cover.style.transform="rotateX(180deg)";

paper.style.transform="translateY(-120px)";

button.style.display="inline-block";

}

button.onclick=function(){

window.location.href="message.html";

}