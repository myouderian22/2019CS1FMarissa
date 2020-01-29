var currentLetter = "";
var final= "";

function everyOther(message, x) {
    for (var i= 0; i < message.length; i+=x) {
        currentLetter = message.charAt(i)
        final += currentLetter
    }
    return final
}

message = "hello, how are you";
console.log(everyOther(message, 3));
