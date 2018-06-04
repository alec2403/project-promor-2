$(function() {
  var header = $(".nav");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
  var scroll = $(window).scrollTop();
  if (scroll >= 20) {
    header.addClass("scrolled");
  } else {
    header.removeClass("scrolled");
  }
});
