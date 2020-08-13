const wrapperEl = document.querySelector(".wrapper");
const numberOfEls = 90;
if (screen.width <= "700") {
  var duration = 2500;
} else {
  var duration = 6000;
}
const delay = duration / numberOfEls;

let tl = anime.timeline({
  duration: delay,
  complete: function () {
    tl.restart();
  }
});

function createEl(i) {
  let el = document.createElement("div");
  const rotate = (360 / numberOfEls) * i;
  const translateY = -50;
  const hue = Math.round((360 / numberOfEls) * i);
  el.classList.add("el");
  el.style.backgroundColor = "hsl(" + hue + ", 40%, 60%)";
  el.style.transform =
    "rotate(" + rotate + "deg) translateY(" + translateY + "%)";
  tl.add({
    begin: function () {
      anime({
        targets: el,
        backgroundColor: [
          "hsl(" + hue + ", 40%, 60%)",
          "hsl(" + hue + ", 60%, 40%)"
        ],
        rotate: [rotate + "deg", rotate + 10 + "deg"],
        translateY: [translateY + "%", translateY + 10 + "%"],
        scale: [1, 1.25],
        easing: "easeInOutSine",
        direction: "alternate",
        duration: duration * 0.1
      });
    }
  });
  wrapperEl.appendChild(el);
}

for (let i = 0; i < numberOfEls; i++) createEl(i);






// $(window).bind('scroll', function() {
//   if ($(window).scrollTop() > 400) {
//       $('.wrapper').hide();
//   }
//   else {
//       $('.wrapper').show();
//   }
// });

$(window).scroll(function() {
  $(".wrapper").css({
    "left": ($(window).scrollTop()) + "px"
  });
  // $("h1").css({
  //   "left": ($(window).scrollTop()) + "vh"
  // });
  // $(".l_h1").css({
  //   "left": ($(window).scrollTop()) + "vh"
  // });
  // $(".par").css({
  //   "top": ($(window).scrollTop()) - "%"
  // });
});