document.write(`

<div class="isolering-wrapper">

<div class="isolering-banner">

<div class="text">

<h1>Få dit budskab her!</h1>

<div class="line line1">
Fortæl dit budskab på BygTek.dk til brugere med stor interesse i isoleringsprodukter og -løsninger
</div>

<div class="line line2">
Denne plads kan blive din i 3, 6 eller 12 måneder
</div>

<div class="line line3">
Dit budskab vises hver gang - Der er er kun én plads!
</div>

</div>

<div class="contact">
Kontakt Kim Anker<br>
kim@odsgard.dk<br>
Mobil: 26 25 51 22
</div>

<div class="cta-desktop">Læs mere</div>
<div class="cta-mobile">Læs mere</div>

<div class="image"></div>

</div>

</div>

<!-- OVERLAY -->
<div class="banner-modal" id="bannerModal">
  <div class="modal-content">

    <span class="close">✕</span>

    <h2>Tak for din interesse</h2>

    <p>
    Tak for at du klikkede på banneret på fagsektionen Isolering.<br><br>
    Du er meget velkommen til at kontakte:
    </p>

    <div class="contact-box">
      <strong>Kim Anker</strong><br>
      kim@odsgard.dk<br>
      26 25 51 22
    </div>

    <p style="margin-top:20px;">
    for flere informationer om markedsføring på BygTek.dk.
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
font-size:clamp(36px,6vw,60px);
color:#ffc400;
margin:0;
transform:scale(0);
animation:zoomIn 1s ease-out forwards;
}

.line{
font-size:clamp(16px,2vw,26px);
margin-top:1.2em;
opacity:0;
transform:translateX(-40px);
line-height:1.3;
}

.line1{animation:slideIn 1s forwards; animation-delay:1s;}
.line2{animation:slideIn 1s forwards; animation-delay:2s;}
.line3{animation:slideIn 1s forwards, pulse 3s infinite; animation-delay:3s; font-weight:bold;}

/* BILLEDE */
.image{
position:absolute;
right:0;
top:0;
width:33%;
height:100%;
background:url("https://kim4690.github.io/Isoleringsbanner/Isolering-Org-001.jpg") center/cover no-repeat;
}

/* KONTAKT */
.contact{
position:absolute;
bottom:8%;
left:7%;
font-size:clamp(14px,1.4vw,20px);
}

/* CTA DESKTOP */
.cta-desktop{
position:absolute;
bottom:8%;
left:32%;
background:#ffc400;
color:#0b2a6f;
padding:12px 18px;
border-radius:6px;
font-weight:bold;
}

/* CTA MOBIL */
.cta-mobile{
display:none;
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

/* OVERLAY */
.banner-modal{
display:flex;
opacity:0;
pointer-events:none;
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.65);
z-index:9999;
justify-content:center;
align-items:center;
transition:opacity 0.4s ease;
}

.banner-modal.active{
opacity:1;
pointer-events:auto;
}

.modal-content{
background:#0b2a6f;
color:white;
padding:40px;
max-width:520px;
width:90%;
border-radius:12px;
text-align:center;
position:relative;
transform:scale(0.8);
opacity:0;
transition:all 0.4s ease;
font-size:16px;
line-height:1.4;
font-family:Arial, Helvetica, sans-serif;
}

.banner-modal.active .modal-content{
transform:scale(1);
opacity:1;
}

.modal-content h2{
color:#ffc400;
font-size:26px;
margin-bottom:15px;
}

.contact-box{
margin-top:15px;
}

.close{
position:absolute;
top:10px;
right:15px;
cursor:pointer;
font-size:20px;
}

/* MOBIL */
@media (max-width:600px){

.line2{
display:none;
}

.contact{
display:none;
}

.text{
width:65%;
top:12%;
}

.cta-desktop{
display:none;
}

.cta-mobile{
display:block;
position:absolute;
bottom:10%;
right:5%;
background:#0b2a6f;
color:#ffc400;
padding:10px 14px;
border-radius:6px;
font-weight:bold;
}

}

</style>

<script>

// INIT EFTER LOAD
setTimeout(function(){

var banner = document.querySelector(".isolering-banner");
var modal = document.getElementById("bannerModal");
var closeBtn = document.querySelector(".close");

if(banner){
banner.addEventListener("click", function(){
modal.classList.add("active");
});
}

if(closeBtn){
closeBtn.addEventListener("click", function(e){
e.stopPropagation();
modal.classList.remove("active");
});
}

modal.addEventListener("click", function(e){
if(e.target === modal){
modal.classList.remove("active");
}
});

},300);

/* RESTART */
setInterval(function(){
var banner = document.querySelector(".isolering-banner");
if(!banner) return;
banner.style.display="none";
setTimeout(()=>banner.style.display="block",50);
},30000);

</script>

`);
