document.write(`

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

<style>

.isolering-banner{
width:980px;
height:540px;
background:#0b2a6f;
position:relative;
overflow:hidden;
font-family:Arial, Helvetica, sans-serif;
color:white;
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
}

.line1{animation:slideIn 1s forwards; animation-delay:1s;}
.line2{animation:slideIn 1s forwards; animation-delay:2s;}
.line3{animation:slideIn 1s forwards, pulse 3s infinite; animation-delay:3s;}

@keyframes slideIn{
to{opacity:1;transform:translateX(0);}
}

@keyframes pulse{
0%{transform:scale(1)}
50%{transform:scale(1.05)}
100%{transform:scale(1)}
}

background:url("https://kim4690.github.io/Isoleringsbanner/Isolering-Org-001.jpg") center/cover no-repeat;

.contact{
position:absolute;
bottom:50px;
right:340px;
font-size:20px;
opacity:0;
animation:fadeIn 1s forwards;
animation-delay:3.5s;
}

@keyframes fadeIn{
to{opacity:1}
}

</style>

`);
