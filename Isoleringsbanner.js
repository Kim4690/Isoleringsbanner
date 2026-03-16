<!DOCTYPE html>
<html lang="da">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

body{
margin:0;
background:#e5e5e5;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
font-family:Arial, Helvetica, sans-serif;
}

.banner{
width:980px;
height:540px;
background:#0b2a6f;
position:relative;
overflow:hidden;
color:white;
}

/* TEKSTOMRÅDE */

.text{
position:absolute;
left:70px;
top:90px;
width:560px;
}

/* OVERSKRIFT */

h1{
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

/* TEKST */

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

/* BILLEDE */

.image{
position:absolute;
right:0;
top:0;
width:320px;
height:540px;
background:url("Isolering-Org-001.jpg") center/cover no-repeat;
}

/* KONTAKT */

.contact{
position:absolute;
bottom:50px;
right:340px;
font-size:20px;
line-height:1.4;
opacity:0;
animation:fadeIn 1s forwards;
animation-delay:3.5s;
text-align:left;
}

@keyframes fadeIn{
to{opacity:1}
}

</style>
</head>

<body>

<div class="banner">

<div class="text">

<h1>Få dit budskab her!</h1>

<div class="line line1">
Fortæl dit budskab på BygTek.dk til brugere med stor interesse i isoleringsprodukter og løsninger
</div>

<div class="line line2">
Denne plads kan blive din i 3, 6 eller 12 måneder.
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

</body>
</html>
