$(document).ready(function() {
  $(".clickable").click(function() {
    $("#text-hidden").fadeToggle();
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
    $("#text-showing").fadeToggle();
  });
});

