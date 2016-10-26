var vowels = ["a","e","i","o","u"];
var output= "";

var pigLatin = function(sentence) {
var words = sentence.split("");
  console.log(words);
    if ((/^[aeiou]$/).test(words[0])) {
      return sentence + "ay"
    } else if ((/[b-df-hj-np-tv-z]/.test(words[0]))){
      var sliceWord = words.splice(0,1);
      words.push(sliceWord + "ay");
      var joinWord = words.join('');
      return joinWord;
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

// var inputNoSymbols = sentence.replace(/[^a-zA-Z ]/g, "");
// console.log(inputNoSymbols);
