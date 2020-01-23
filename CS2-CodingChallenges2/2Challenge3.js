function reverse(message) {
    var reverseString = "";
    for(var i=message.length-1; i>=0; i--){
        reverseString += message.charAt(i);
    }
    return reverseString;
}

function palindrome(message) {
    var mirror = reverse(message);
    return mirror == message;
}

console.log(palindrome("hello"));
console.log(palindrome("good"));
console.log(palindrome("racecar"));