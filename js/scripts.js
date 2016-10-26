var convertToDecimal = function(userInput){
  var digits = userInput.split("");
  var decimalTotal=0;

  digits.reverse();

  for (var i=0; i<digits.length; i++) {
    if (digits[i] === "1") {
      decimalTotal += Math.pow(2,i);
    }

  }
  return decimalTotal;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();


    var userInput = $("#input").val();
    var result = convertToDecimal(userInput);
    $("#output").text(result);

  });
});
