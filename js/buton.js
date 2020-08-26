
$( document ).ready(function() {
    $(".logo").css("left","-12rem").animate({"left":"2rem"}, 400, 'swing');
    $(".page_home h1").css("left","-27%").animate({"left":"0%"}, 400, 'swing');
    $(".l_h1").css("left","-20%").animate({"left":"0%"}, 400, 'swing');
    $(".social").css("left","-20%").animate({"left":"0%"}, 400, 'swing');
    $(".wrapper").css("margin-left","120vw").animate({"margin-left":"77vw"}, 600, 'swing');
});



$('.li_house, .i_house').click(function(){
    $('.page_home').css('display','inline');
    $('.proiecte').css('display','none');
    $('.contact').css('display','none');
});

$('.li_proiecte, .i_proiecte').click(function(){
    $('.page_home').css('display','none');
    $('.proiecte').css('display','inline');
    $('.contact').css('display','none');
});

$('.li_contact, .i_contact').click(function(){
    $('.page_home').css('display','none');
    $('.proiecte').css('display','none');
    $('.contact').css('display','inline');
});





$('.li_house, .i_house').click(function(){
    
    if($('rect[id="stretchy"]').attr('x')!='20'){

        $(".logo").css("left","-12rem").animate({"left":"2rem"}, 400, 'swing');
        $(".page_home h1").css("left","-27%").animate({"left":"0%"}, 400, 'swing');
        $(".l_h1").css("left","-20%").animate({"left":"0%"}, 400, 'swing');
        $(".social").css("left","-20%").animate({"left":"0%"}, 400, 'swing');
        $(".wrapper").css("margin-left","0vw").animate({"margin-left":"77vw"}, 400, 'swing');
    
}});



$('.li_proiecte, .i_proiecte').click(function(){
    
    if($('rect[id="stretchy"]').attr('x')=='20'){
        $(".box1").css("left","100%").animate({"left":"6%"}, 400, 'swing');
        $(".box2").css("right","-40%").animate({"right":"4%"}, 400, 'swing');

    }

    if($('rect[id="stretchy"]').attr('x')=='320'){
        $(".box1").css("left","-40%").animate({"left":"6%"}, 400, 'swing');
        $(".box2").css("right","100%").animate({"right":"4%"}, 400, 'swing');

    }
    
});


$('.li_contact, .i_contact').click(function(){
    if($('rect[id="stretchy"]').attr('x')=='20' || $('rect[id="stretchy"]').attr('x')=='170'){
        $(".content").css("left","130%").animate({"left":"50%"}, 400, 'swing');
    }
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




