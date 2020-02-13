var arrayExample = 

    [
    ['','',''],
    ['','',''],
    ['','',''],
    ]
   ;

   
init();

function init(){
    for(var r=0; r<3; r++)
        for(var c=0; c<3; c++){
            $('.box').append("<div class='pixel' r='" + r + "' c= '" + c + "' player='-1'>" + arrayExample[c][r] + "</div>");
        }
}

var color1 = 'red';
var color2 = 'blue';
var numClicks = '0';


$('.pixel').click(
    function() {

        var player = numClicks%2;

        var currentPlayer = $(this).attr("player");
        console.log(currentPlayer);

        if(currentPlayer=="-1"){

            if(player==1) {
                $(this).css("background-color",color1);   
            }
            else{
                $(this).css("background-color",color2);  
                
            }
            $(this).attr("player",player);
            numClicks++;
       }
       if(hasWon(this))
        alert("you win");
    }
);

function hasWon(box){
    var row = $(box).attr("r") ;
    var col = $(box).attr("c") ;
    var player = $(box).attr("player");
    console.log(row, col, player);



    return
}