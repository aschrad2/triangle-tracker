$(document).ready(function() {
  $("form#triangle_test").submit(function(event) {
    var first_side = parseInt($("input#first_side").val());
    var second_side = parseInt($("input#second_side").val());
    var third_side = parseInt($("input#third_side").val());

    if (first_side) {
      if (first_side == second_side && second_side == third_side) {
        var quote = "it is an equilateral triangle";
      } else if (first_side != second_side && second_side != third_side && first_side != third_side) {
        var quote = "it is a scalene triangle";
      } else if (first_side == second_side && second_side != third_side) {
        var quote="it is an isoleces triangle";
      } else if (first_side != second_side && second_side == third_side) {
        var quote = "it is also an isoleces triangle";
      } else if (first_side == third_side && second_side != third_side) {
        var quote = "even this is an isoleces triangle";
      } 

      $("#rate").text(quote);
      $("#quote").show();

    } else {
      alert("Test");
    }
    event.preventDefault();
  });
});
