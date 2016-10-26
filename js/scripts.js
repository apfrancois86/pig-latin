// var symbols = ["!", "@", ".", ",", "?", "#", "$", "%", "/"]
// var numbers = ["0","1","2","3","4","5","6","7","8","9"]

var pigLatin = function(sentence) {
    return false;
  }


//Start UI Logic
$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    $("#output").text(result);
  });
});


// var checkChar = function(character) {
//   characterLessSentence = sentence.split("").filter(function(x){
//     if (x !== "1" && x !== "2" && x !== "3") {
//       return true;
//     }
//   });
// };
