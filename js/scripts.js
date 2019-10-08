"use strict";


// APPLE TV BTN
var ButtonHover = {
  button: document.querySelector('.button'),
  elWidth: 0,
  elHeight: 0,
  cursorX: 0,
  cursorY: 0,
  elCenterX: 0,
  elCenterY: 0,
  init: function init() {
    var _this = this;

    this.elWidth = this.button.offsetWidth;
    this.elHeight = this.button.offsetHeight;
    this.button.addEventListener('mousemove', function (e) {
      return _this.animate(e);
    });
  },
  animate: function animate(e) {
    var cord = e.target.getBoundingClientRect();
    this.cursorX = e.x;
    this.cursorY = e.y;
    this.elCenterX = cord.left + cord.width / 2;
    this.elCenterY = cord.top + cord.height / 2;
    var y = this.elCenterY - this.cursorY;
    var x = this.elCenterX - this.cursorX;
    var theta = Math.atan2(y, x);
    var angle = theta * 180 / Math.PI - 90;

    if (angle < 0) {
      angle = angle + 360;
    }

    this.button.style.transform = 'translateX(' + -x * 0.05 + 'px) rotateX(' + -y * 0.1 + 'deg) rotateY(' + x * 0.1 + 'deg)';
    this.button.style.boxShadow = x * 0.2 + "px " + y * 0.3 + "px 28px rgba(0,0,0,0.25)";
  }
};
ButtonHover.init();




// Delete button animation
var removeSuccess;

removeSuccess = function() {
  return $('.delete-check-button').removeClass('success');
};

$(document).ready(function() {
  return $('.delete-check-button').click(function() {
    $(this).addClass('success');
    return setTimeout(removeSuccess, 3000);
  });
});