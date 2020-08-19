let durationUp = 1.5;

function animateFlight() {
  let origamiParts = Snap.selectAll('#crane > path');

  origamiParts.forEach(function (el, i) {
    let pathAnimation = el.animate(
    { d: el.attr('d2') }, durationUp);


    /* Get the animation controller */
    let pathAnimationCtrl = pathAnimation.anims[Object.keys(pathAnimation.anims)[0]];

    /* Pause the animation right away */
    pathAnimationCtrl.pause();

    let tweenerObj = { progress: 0 };

    TweenMax.to(tweenerObj, durationUp, {
      progress: 1,
      ease: Sine.easeInOut,
      onUpdate: function () {
        pathAnimationCtrl.status(tweenerObj.progress);
        pathAnimationCtrl.update();
      },
      yoyo: true,
      repeat: -1 });

  });
}



animateFlight();
