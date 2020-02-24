init();

function init(){
    for(var r=0; r<3; r++)
        for(var c=0; c<3; c++){
            $('.box').append("<div class='pixel' r= '" + r + "'  c= '" + c + "' p='-1'></div>");
        }
}

var color1 = 'red';
var color2 = 'blue';
var numClicks = '0';

function hasWon(box){
    var row = $(box).attr("r") ;
    var col = $(box).attr("c") ;
    var player = $(box).attr("p");
    
    var rowClicked = $('[r='+row+'][p='+player+']');
    console.log(rowClicked.length);
    var colClicked = $('[c='+col+'][p='+player+']');
    console.log(colClicked.length);

    console.log(row.length);
    console.log(col.length);
    console.log(row, col, player);
    if(rowClicked.length>=3){
        alert("you win!");
    }
    if(colClicked.length>=3){
        alert("you win!");
    }
}

$('.pixel').click(
    function() {

        $(this).attr("clicked", "true");

        var player = numClicks%2;

        var currentPlayer = $(this).attr("p");
        console.log(currentPlayer);

        if(currentPlayer=="-1"){

            if(player==1) {
                $(this).css("background-color",color1);   
            }
            else{
                $(this).css("background-color",color2);  
                
            }
            $(this).attr("p",player);
            numClicks++;
       }
       hasWon(this);
    }
);
