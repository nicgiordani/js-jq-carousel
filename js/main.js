$(document).ready(
  function () {

    $(".next").click(
      function() {
        avanti ();
      }
    );

    $(".prev").click(
      function() {
        indietro ();
      }
    );


  }
);

function avanti() {
  var activeImage = $(".images img.active");
  var activeDot = $(".nav i.active");

  activeImage.removeClass("active");

  if (activeImage.hasClass("last") == true) {
    $(".images img.first").addClass("active");
  } else {
    activeImage.next().addClass("active");
  }

}

function indietro() {
  var activeImage = $(".images img.active");
  var activeDot = $(".nav i.active");

  activeImage.removeClass("active");

  if (activeImage.hasClass("first") == true) {
    $(".images img.last").addClass("active");
  } else {
    activeImage.prev().addClass("active");
  }


}
