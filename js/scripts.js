$(document).ready(function() {
  $(".clickable").click(function() {
    $("#text-hidden").toggle();
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $("#text-showing").toggle();
  });
});