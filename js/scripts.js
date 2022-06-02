$(document).ready(function() {
  $(".clickable").click(function() {
        $("#text-hidden").fadeToggle();
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
    $("#text-showing").fadeToggle();
  });
  
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});
