var home = document.querySelector('.page_home');
var preturi = document.querySelector('.preturi');
var proiecte = document.querySelector('.proiecte');
var contact = document.querySelector('.contact');


var buton1 = document.querySelector('.li_house');

buton1.addEventListener("click", function (event) {
    home.style.display = "inline";
    preturi.style.display = "none";
    proiecte.style.display = "none";
    contact.style.display = "none";
});

var buton2 = document.querySelector('.li_preturi');

buton2.addEventListener("click", function (event) {
    home.style.display = "none";
    preturi.style.display = "inline";
    proiecte.style.display = "none";
    contact.style.display = "none";
});

var buton3 = document.querySelector('.li_proiecte');

buton3.addEventListener("click", function (event) {
    home.style.display = "none";
    preturi.style.display = "none";
    proiecte.style.display = "inline";
    contact.style.display = "none";
});

var buton4 = document.querySelector('.li_contact');

buton4.addEventListener("click", function (event) {
    home.style.display = "none";
    preturi.style.display = "none";
    proiecte.style.display = "none";
    contact.style.display = "inline";
});




var buton8 = document.querySelector('.i_house');

buton8.addEventListener("click", function (event) {
    home.style.display = "inline";
    preturi.style.display = "none";
    proiecte.style.display = "none";
    contact.style.display = "none";
});

var buton5 = document.querySelector('.i_preturi');

buton5.addEventListener("click", function (event) {
    home.style.display = "none";
    preturi.style.display = "inline";
    proiecte.style.display = "none";
    contact.style.display = "none";
});

var buton6 = document.querySelector('.i_proiecte');

buton6.addEventListener("click", function (event) {
    home.style.display = "none";
    preturi.style.display = "none";
    proiecte.style.display = "inline";
    contact.style.display = "none";
});

var buton7 = document.querySelector('.i_contact');

buton7.addEventListener("click", function (event) {
    home.style.display = "none";
    preturi.style.display = "none";
    proiecte.style.display = "none";
    contact.style.display = "inline";
});


// var $page = $('.pages');
// var $burg = $('.wrapper-menu');
// var $butoane = $('#demo'); 


// $burg.on('click', function () {
//     $butoane.toggleClass('haidee');
// });
// $page.on('click', function () {
//     $butoane.removeClass('haidee');
// });
