var pigLatin = function(sentence) {
var words = sentence.split("");
  console.log(words);
    if ((/^[aeiou]$/).test(words[0])) {
      return sentence + "ay";
    }  else if ((/[q]/).test(words[0]) && (/[u]/).test(words[1])){
      var sliceWord = words.splice(0,2);
      var joinSlice = sliceWord.join('');
      words.push(joinSlice + "ay");
      var joinWord = words.join('');
      return joinWord;
    } else if (((/[b-df-hj-np-tv-z]/.test(words[0]))) && ((/[b-df-hj-np-tv-z]/.test(words[1]))) && ((/[b-df-hj-np-tv-z]/.test(words[2])))) {
      var sliceWord = words.splice(0,3);
      var joinSlice = sliceWord.join('');
      words.push(joinSlice + "ay");
      var joinWord = words.join('');
      return joinWord;
    }  else if ((/[b-df-hj-np-tv-z]/.test(words[0])) && (/[b-df-hj-np-tv-z]/.test(words[1]))) {
      var sliceWord = words.splice(0,2);
      var joinSlice = sliceWord.join('');
      words.push(joinSlice + "ay");
      var joinWord = words.join('');
      return joinWord;
    } else if ((/[b-df-hj-np-tv-z]/.test(words[0]))){
      var sliceWord = words.splice(0,1);
      words.push(sliceWord + "ay");
      var joinWord = words.join('');
      return joinWord;
    } else {
      return sentence
    }
  }


// var pigLatin = function(sentence) {
// var words = sentence.split("");
//   console.log(words);
//     if ((/^[aeiou]$/).test(words[0])) {
//       return sentence + "ay";
//     } else {
//       console.log("wordLenght: "+words.length);
//       for (var index = 0; index < words.length; index++){
//         console.log("iteration number: "+index);
//         if (words[0] !== /^[aeiou]$/) {
//           var shifted = words.shift();
//           console.log("shifted: " + shifted);
//           words.push(shifted);
//           console.log("joinWord: " + joinWord);
//
//         }
//           var joinWord = words.join('');
//
//       }
//       return joinWord + "ay";
//     }
//   }


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
