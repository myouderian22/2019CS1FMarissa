var arrayExample = 

    [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [4,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [4,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [3,3,3,8,8,8,3,3,3,3,3,3,3,3,3,5,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,3,3],
    [3,3,3,8,8,8,3,3,3,3,3,3,3,3,5,5,5,3,3,3,3,3,6,6,6,3,3,3,3,3,3,3,3],
    [3,3,3,8,8,8,3,3,3,3,3,3,3,5,5,7,5,5,3,3,3,6,6,7,6,6,3,3,3,3,3,3,3],
    [3,3,3,8,8,8,3,3,3,3,3,3,3,3,5,5,5,3,3,3,3,3,6,6,6,3,3,3,3,3,3,3,3],
    [3,3,3,8,8,8,3,3,3,3,3,3,3,3,3,5,3,3,3,3,3,3,3,6,3,3,3,3,3,3,3,3,3],
    [3,3,8,8,8,8,8,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3],
    [3,3,8,8,8,8,8,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,3,4,4,3,3,3,3,3,3,3],
    [3,3,8,8,8,8,8,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,3,4,4,3,3,3,3,3,3,3],
    [3,8,8,8,8,8,8,8,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3],
    [8,8,8,8,8,8,8,8,8,3,3,3,3,3,4,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3],
    [8,8,8,8,8,8,8,8,8,3,3,3,3,3,4,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3],
    ]
   ;

console.log(arrayExample[1][3]);

init();

function init(){
    for(var c=0; c<33; c++)
        for(var r=0; r<33; r++){
            $('.box').append("<div class='pixel'>" + arrayExample[c][r] + "</div>");
        }
}

$("color1").click(function(){
    color = 'lightblue';
});




/* 1=lightblue, 2=yellow. 3=lightgreen, 4=darkgreen, 5=blue, 6=purple, 7=pink, 8=brown */