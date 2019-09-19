$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());

    if ((sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA)) {

      if (sideA == sideB && sideB == sideC) {
        alert("Equalateral");
      } else if (((sideA == sideB && sideA != sideC) || (sideA != sideB && sideB == sideC) || (sideC == sideA && sideC != sideB))) {
        alert("Isosceles");
      } else if (sideA != sideB != sideC != sideA) {
        alert("Scaline");
      }
    } else {
      alert("Not a Triangle! TRY AGAIN!")
    }
  });
});
