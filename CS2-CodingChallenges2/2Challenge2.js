function reverse(message) {
    var reverseString = "";
    for(var i=message.length-1; i>=0; i--){
        reverseString += message.charAt(i);
    }
    return reverseString;
}

console.log(reverse("hello"));
console.log(reverse("good"));