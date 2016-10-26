var vowels = ["a","e","i","o","u"];
var output= "";

var pigLatin = function(sentence) {
// var inputNoSymbols = sentence.replace(/[^a-zA-Z ]/g, "");
// console.log(inputNoSymbols);
var words = sentence.split("");
  console.log(words);
    if (words[0]=== "a" || words[0]=== "e" || words[0]=== "i" || words[0]=== "o" || words[0]=== "u") {
      return sentence + "ay"
    // } else if  {


    } else {
      return sentence
    }
  }


//Start UI Logic
$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = pigLatin(sentence);
    alert(result);
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



// if (words.includes(vowels[0])) {
//   alert("this is an vowel");


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
