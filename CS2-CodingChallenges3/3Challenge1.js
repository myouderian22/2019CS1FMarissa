var vowels = "aeiou"
var currentLetter = "";
var letters = "";

function noVowels(message) {
    for (var i= 0; i < message.length; i++) {
        currentLetter = message.charAt(i)
        if (vowels.indexOf(currentLetter) >= 0 ){
            currentLetter = ""
        }
        else{
            letters += currentLetter;
        }
    }
    return letters
}

message = "hello, how are you";
console.log(noVowels(message));