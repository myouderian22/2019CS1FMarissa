function reverse(message) {
    var reverseString = "";
    for(var i=message.length-1; i>=0; i--){
        reverseString += message.charAt(i);
    }
    return reverseString;
}

console.log(reverse("hello"));
console.log(reverse("good"));



//Given a String, return true if the string is a palindrome, 
//false otherwise. Make use of your reverse function in the previous challenge.