var vowels = ["a","e","i","o", "u"];

var pigLatin = function(sentence) {
var inputNoSymbols = sentence.replace(/[^a-zA-Z ]/g, "");
console.log(inputNoSymbols);
var words = inputNoSymbols.split(" ");
  console.log(words);
  if (words.includes(vowels[0])) {
    alert("this is an A");
  }
};

// var pigLatin = function(sentence) {
//   sentence.filter(function(x){
//     console.log(characterLessSentence);
//     if (x !== "1" && x !== "2" && x !== "3") {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }



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
