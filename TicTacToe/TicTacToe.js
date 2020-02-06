var arrayExample = 

    [
    ['','',''],
    ['','',''],
    ['','',''],
    ]
   ;


init();

function init(){
    for(var c=0; c<3; c++)
        for(var r=0; r<3; r++){
            $('.box').append("<div class='pixel' player='-1'>" + arrayExample[c][r] + "</div>");
        }
}

var color1= 'red';
var color2= 'blue';
var color3= 'rgb(255,255,255)';
var numClicks= '0';



$('.pixel').click(
    function() {

        var player= numClicks%2;

        var currentColor = $(this).css("background-color");
        console.log(player);

        

        //if(currentColor==color3){

            if(player==1) {
                console.log(color1);
                $(this).css("background-color",color1);   
            }
            else{
                console.log(color2);
                $(this).css("background-color",color2);  
            }
            numClicks++;
            console.log(numClicks);
       // }
        //else{
           // console.log("Something Went Wrong");
        //}
    }
);