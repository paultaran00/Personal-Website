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

