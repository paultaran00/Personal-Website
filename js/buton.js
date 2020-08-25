var home = document.querySelector('.page_home');

var proiecte = document.querySelector('.proiecte');
var contact = document.querySelector('.contact');


var buton1 = document.querySelector('.li_house');

buton1.addEventListener("click", function (event) {
    home.style.display = "inline";
    proiecte.style.display = "none";
    contact.style.display = "none";
});



var buton3 = document.querySelector('.li_proiecte');

buton3.addEventListener("click", function (event) {
    home.style.display = "none";
    proiecte.style.display = "inline";
    contact.style.display = "none";
});

var buton4 = document.querySelector('.li_contact');

buton4.addEventListener("click", function (event) {
    home.style.display = "none";
    proiecte.style.display = "none";
    contact.style.display = "inline";
});




var buton8 = document.querySelector('.i_house');

buton8.addEventListener("click", function (event) {
    home.style.display = "inline";
    proiecte.style.display = "none";
    contact.style.display = "none";
});


var buton6 = document.querySelector('.i_proiecte');

buton6.addEventListener("click", function (event) {
    home.style.display = "none";
    proiecte.style.display = "inline";
    contact.style.display = "none";
});

var buton7 = document.querySelector('.i_contact');

buton7.addEventListener("click", function (event) {
    home.style.display = "none";
    proiecte.style.display = "none";
    contact.style.display = "inline";
});





var mover = document.querySelector(".mover");
var svg = document.querySelector("#demo");
var cont_b = svg.querySelector(".li_contact");

mover.addEventListener("click", function(e) {
    cont_b.dispatchEvent(new Event('click'));
    cont_b.parentElement.dispatchEvent(new Event('click'));
});




$(".box1").hover(function(){
    $(".vitaminer_titlu").css("left","40%").animate({"left":"50%"}, 400, 'swing');
    $(".vit").css("left","0%").animate({"left":"-4%"}, 400, 'swing');
    $(".highlight-inner3").css("left","58%").animate({"left":"59%"}, 400, 'swing');
    

    },function(){
    $(".vitaminer_titlu").css("left","50%").animate({"left":"40%"}, 400, 'swing');
    $(".vit").css("left","-4%").animate({"left":"0%"}, 400, 'swing');
    $(".highlight-inner3").css("left","59%").animate({"left":"58%"}, 400, 'swing');
    

});

$(".box2").hover(function(){
    $(".unity_titlu").css("left","40%").animate({"left":"50%"}, 400, 'swing');
    $(".unity").css("left","0%").animate({"left":"-4%"}, 400, 'swing');
    $(".highlight-inner4").css("left","58%").animate({"left":"59%"}, 400, 'swing');
    
    
    },function(){
    $(".unity_titlu").css("left","50%").animate({"left":"40%"}, 400, 'swing');
    $(".unity").css("left","-4%").animate({"left":"0%"}, 400, 'swing');
    $(".highlight-inner4").css("left","59%").animate({"left":"58%"}, 400, 'swing');
    
});




	$('.g-recaptcha').css('width', '304px');
	$('.g-recaptcha').css('height', '85');
	

