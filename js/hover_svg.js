$(".svg_story").hover(function () {
    $(".gif4").css("display", "inline");
    $(".gif4").css("opacity", "0.3");
}, function () {
    $(".gif4").css("display", "none");
    $(".gif4").css("opacity", "0");
});



$(".svg_story").mousemove(function (event) {
    $(".gif4").css({
        "left": event.pageX,
        "top": event.pageY
    });
});