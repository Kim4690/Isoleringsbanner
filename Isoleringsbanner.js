// VENT TIL DOM ER KLAR
(function(){

function initBanner(){

var banner = document.querySelector(".isolering-banner");
var modal = document.getElementById("bannerModal");
var closeBtn = document.querySelector(".close");

if(!banner || !modal) return;

// ÅBN OVERLAY
banner.addEventListener("click", function(){
modal.classList.add("active");
});

// LUK OVERLAY
if(closeBtn){
closeBtn.addEventListener("click", function(e){
e.stopPropagation();
modal.classList.remove("active");
});
}

// KLIK UDENFOR LUKKER
modal.addEventListener("click", function(e){
if(e.target === modal){
modal.classList.remove("active");
}
});

}

// KØR EFTER LOAD
setTimeout(initBanner, 300);

})();
