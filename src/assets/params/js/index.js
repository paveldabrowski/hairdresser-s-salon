$(function () {
  var navMain = $("#navbarsExampleDefault");
  navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });
});

$(document).click(function (event) {
  var clickover = $(event.target);
  var _opened = $(".navbar-collapse").hasClass("show");
  if (_opened === true && !clickover.hasClass("navbar-toggler")) {
    $(".navbar-toggler").click();
  }
});
