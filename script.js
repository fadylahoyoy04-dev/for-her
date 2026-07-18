const btn=document.getElementById("openBtn");

const opening=document.getElementById("opening");

const content=document.getElementById("content");

const music=document.getElementById("music");

const typing=document.getElementById("typing");

const text=`

Hi.

Mungkin ini cara yang agak aneh
untuk menyampaikan semuanya.

Tapi menurutku,
sebuah surat akan selalu lebih jujur
daripada kata-kata yang terburu-buru.

Lucu ya...

Kita bahkan belum pernah bertemu.

Namun entah kenapa,
percakapan-percakapan kecil itu
selalu berhasil membuat hariku terasa lebih baik.

Aku tidak tahu
cerita ini akan berakhir seperti apa.

Aku juga tidak ingin
memaksakan semuanya.

Aku hanya ingin
berterima kasih.

Karena tanpa sadar,
kamu sudah menjadi bagian
dari hari-hariku.

Semoga suatu saat nanti,

kita benar-benar bisa bertemu.

Until then...

Take care.

❤️
`;

btn.onclick=()=>{

opening.style.opacity="0";

music.volume=0;

music.play();

let fade=0;

let volume=setInterval(()=>{

fade+=0.02;

music.volume=fade;

if(fade>=0.5){

clearInterval(volume);

}

},100);

setTimeout(()=>{

opening.style.display="none";

content.style.display="block";

typeWriter();

},1000);

}

let i=0;

function typeWriter(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}