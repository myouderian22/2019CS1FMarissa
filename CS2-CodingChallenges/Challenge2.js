// CHALLENGE 2

/*
* Loops allow us to do a repetetive action without repeating the lines of code needed.
* For example:
*
* for(var i=0; i<10; i++){
*    console.log(i);
* }
* 
* Outputs the numbers 0,1,2,3,4,5,6,7,8,9
* 
* Write a function that takes two numbers, a min and a high, and outputs the numbers 
* between the min and high. The function declaration has been done for you.
*/

 

function showNumbers(min, high ){
    for(var i=min; i<high; i++){
        console.log(i);
    }
}

showNumbers(15,25)