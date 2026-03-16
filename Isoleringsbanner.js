document.write(`

<a href="mailto:kim@odsgard.dk?subject=Banner%20til%20fagsektionen%20Isolering&body=Hej%20Kim%0D%0A%0D%0AJeg%20er%20interesseret%20i%20bannerpladsen.%0D%0A%0D%0AKontakt%20mig%20venligst%20for%20flere%20informationer.%0D%0A%0D%0AKontaktoplysninger:%0D%0AKim%20Anker%0D%0Akim@odsgard.dk%0D%0AMobil:%2026%2025%2051%2022" style="text-decoration:none;">

<div class="isolering-banner">

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

</a>

<style>

.isolering-banner{
width:980px;
height:540px;
background:#0b2a6f;
position:relative;
overflow:hidden;
font-family:Arial, Helvetica, sans-serif;
color:white;
cursor:pointer;
}

.text{
position:absolute;
left:70px;
top:90px;
width:560px;
}

.isolering-banner h1{
font-size:60px;
color:#ffc400;
margin:0;
transform:scale(0);
animation:zoomIn 1s ease-out forwards;
}

@keyframes zoomIn{
0%{transform:scale(0);opacity:0;}
100%{transform:scale(1);opacity:1;}
}

.line{
font-size:26px;
margin-top:28px;
opacity:0;
transform:translateX(-40px);
line-height:1.3;
}

.line1{
animation:slideIn 1s forwards;
animation-delay:1s;
}

.line2{
animation:slideIn 1s forwards;
animation-delay:2s;
}

.line3{
animation:slideIn 1s forwards, pulse 3s infinite;
animation-delay:3s;
font-weight:bold;
}

@keyframes slideIn{
to{
opacity:1;
transform:translateX(0);
}
}

@keyframes pulse{
0%{transform:scale(1)}
50%{transform:scale(1.05)}
100%{transform:scale(1)}
}

.image{
position:absolute;
right:0;
top:0;
width:320px;
height:540px;
background:url("https://kim4690.github.io/Isoleringsbanner/Isolering-Org-001.jpg") center/cover no-repeat;
}

.contact{
position:absolute;
bottom:50px;
right:340px;
font-size:20px;
line-height:1.4;
opacity:0;
animation:fadeIn 1s forwards;
animation-delay:3.5s;
}

@keyframes fadeIn{
to{opacity:1}
}

</style>

`);

setInterval(function(){

var banner = document.querySelector(".isolering-banner");

banner.style.display="none";

setTimeout(function(){
banner.style.display="block";
},50);

},30000);
