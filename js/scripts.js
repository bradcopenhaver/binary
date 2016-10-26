var output = ""

var translateWords = function(userInput) {
  var letters = userInput.split("");
  if (/[aeiou]/i.test(letters[0])) {
    output = userInput + "ay";
  }
  else if (/[b-df-hj-np-tv-xz]/i.test(letters[0])) {
    var firstVowel = userInput.search(/[aeiouy]/i);
    var firstQ = userInput.search(/q/i);

    if (firstQ >=0 && letters[firstQ+1] === "u" || letters[firstQ+1] === "U" && firstQ < firstVowel) {
      var firstConsonants = "";
      for (var i=0; i<firstQ+2; i++) {
        firstConsonants += letters[i];
      }
      output = userInput.slice(firstQ+2) + firstConsonants + "ay";
    }
    else {
    var firstConsonants = "";
    for (var i=0; i<firstVowel; i++) {
      firstConsonants += letters[i];
    }
    output = userInput.slice(firstVowel) + firstConsonants + "ay";
    }
  }
  else if (letters[0] === "y") {
    var firstVowel = userInput.search(/[aeiou]/i);
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

var makeWords = function(userInput) {
  var words = userInput.split(" ");
  var newWords = [];
  for (var i=0; i<words.length; i++) {
    newWords.push(translateWords(words[i]));
  }
  return newWords.join(" ");
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#inputSentence").val();
    var result = makeWords(userInput);
    $("#output").text(result);


  });
});
