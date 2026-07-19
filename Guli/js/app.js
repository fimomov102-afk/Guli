// Yulduzlar yaratish

const stars=document.getElementById("stars");

for(let i=0;i<150;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*2+"s";

stars.appendChild(star);

}

// Tugma

document.getElementById("openBtn").onclick=function(){

window.location.href="letter.html";

}