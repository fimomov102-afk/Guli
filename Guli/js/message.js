const message=`Salom Gulhayo...

Balki bu sayt seni biroz hayron qolgandir.

Men oddiy "salom" yozishni emas,
qalbimdagi hislarni boshqacha usulda aytishni xohladim.

Sening samimiyliging,
kulging va odobing menga juda yoqadi.

Shuning uchun shu kichik saytni
faqat sen uchun tayyorladim.

Agar shu yerga qadar o'qigan bo'lsang,
buning o'zi meni xursand qiladi.

❤️`;

let i=0;

function typeWriter(){

if(i<message.length){

document.getElementById("text").innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,40);

}
else{

document.getElementById("nextBtn").style.display="inline-block";

}

}

typeWriter();

document.getElementById("nextBtn").onclick=function(){

window.location.href="question.html";

}