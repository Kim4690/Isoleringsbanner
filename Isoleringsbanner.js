document.write(`

<div class="isolering-wrapper">

<div class="isolering-banner" onclick="openBannerModal()">

<div class="text">

<h1>Få dit budskab her!</h1>

<div class="line line1">
Fortæl dit budskab på BygTek.dk til brugere med stor interesse i isoleringsprodukter og løsninger
</div>

<div class="line line2">
Denne plads kan blive din i 3, 6 eller 12 måneder
</div>

<div class="line line3">
Der er kun én plads!
</div>

</div>

<div class="contact">
Kontakt Kim Anker<br>
kim@odsgard.dk<br>
Mobil: 26 25 51 22
</div>

<div class="image"></div>

</div>

</div>

<!-- OVERLAY -->
<div class="banner-modal" id="bannerModal">
  <div class="modal-content">
    <span class="close" onclick="closeBannerModal()">✕</span>
    <p>
    Tak for at du klikkede på banneret og din interesse i et banner på fagsektionen Isolering.<br><br>
    Du er velkommen til at kontakte<br><br>
    <strong>Kim Anker</strong><br>
    kim@odsgard.dk<br>
    26 25 51 22<br><br>
    for flere informationer.
    </p>
  </div>
</div>

<style>

/* BANNER */
.isolering-banner{
width:100%;
max-width:980px;
aspect-ratio:980/540;
background:#0b2a6f;
position:relative;
overflow:hidden;
font-family:Arial, Helvetica, sans-serif;
color:white;
cursor:pointer;
}

.text{
position:absolute;
left:7%;
top:17%;
width:58%;
}

h1{
font-size:clamp(22px,4vw,60px);
color:#ffc400;
margin:0;
transform:scale(0);
animation:zoomIn 1s ease-out forwards;
}

.line{
font-size:clamp(12px,1.6vw,26px);
margin-top:1.5em;
opacity:0;
transform:translateX(-40px);
}

.line1{animation:slideIn 1s forwards; animation-delay:1s;}
.line2{animation:slideIn 1s forwards; animation-delay:2s;}
.line3{animation:slideIn 1s forwards, pulse 3s infinite; animation-delay:3s;}

.image{
position:absolute;
right:0;
top:0;
width:33%;
height:100%;
background:url("https://kim4690.github.io/Isoleringsbanner/Isolering-Org-001.jpg") center/cover no-repeat;
}

.contact{
position:absolute;
bottom:8%;
right:35%;
font-size:clamp(10px,1.2vw,20px);
}

/* ANIMATION */
@keyframes zoomIn{
0%{transform:scale(0);opacity:0;}
100%{transform:scale(1);opacity:1;}
}

@keyframes slideIn{
to{opacity:1;transform:translateX(0);}
}

@keyframes pulse{
0%{transform:scale(1)}
50%{transform:scale(1.05)}
100%{transform:scale(1)}
}

/* MODAL */
.banner-modal{
display:none;
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6); /* 60% – bedre end 20% */
z-index:9999;
justify-content:center;
align-items:center;
}

.modal-content{
background:white;
padding:30px;
max-width:500px;
width:90%;
border-radius:10px;
text-align:center;
font-family:Arial;
color:#000;
position:relative;
}

.close{
position:absolute;
top:10px;
right:15px;
font-size:20px;
cursor:pointer;
}

</style>

<script>

function openBannerModal(){
document.getElementById("bannerModal").style.display="flex";
}

function closeBannerModal(){
document.getElementById("bannerModal").style.display="none";
}

/* RESTART */
setInterval(function(){
var banner = document.querySelector(".isolering-banner");
if(!banner) return;
banner.style.display="none";
setTimeout(()=>banner.style.display="block",50);
},30000);

</script>

`);
