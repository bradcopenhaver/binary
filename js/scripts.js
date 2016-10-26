var vowels = ["a", "e", "i", "o", "u"]
var output = ""

var translate = function(userInput) {
  var letters = userInput.split("");
  if (letters[0] === "a" || letters[0] === "e" || letters[0] === "i" || letters[0] === "o" || letters[0] === "u") {
    output = userInput + "ay";
  }
  else if (letters[0] === "q" && letters[1] === "u") {
    output = userInput.slice(2) + "quay";
  }
  else if (/[b-df-hj-np-tv-z]/.test(letters[0])) {
    var firstVowel = userInput.search(/[aeiou]/);
    var firstConsonants = "";
    for (var i=0; i<firstVowel; i++) {
      firstConsonants += letters[i];
    }
    output = userInput.slice(firstVowel) + firstConsonants + "ay";
  }
  else {
    output = userInput;
  }
  return output;
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#inputSentence").val();
    var result = translate(userInput);
    $("#output").text(result);


  });
});
