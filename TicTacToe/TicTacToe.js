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
            $('.box').append("<div class='pixel'>" + arrayExample[c][r] + "</div>");
        }
}