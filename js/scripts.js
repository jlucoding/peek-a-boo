$(document).ready(function() {
  $(".clickable").click(function() {
    $("#text-hidden").fadeToggle();
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
    $("#text-showing").fadeToggle();
  });

  
  $("button#dark").click(function() {
    $("button#dark").toggle();
    $("button#light").toggle();
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("button#light").toggle();
    $("button#dark").toggle();
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});
