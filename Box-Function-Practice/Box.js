$('.color1').click(
    function(){
        alert("I'm Hungry");
    }
);

$('.color1').click(
    function(){
        var color=$(this).css("background-color");
        console.log(color);
        $('body').css("background-color",color);
    }
);


$('.color2').click(
    function(){
        var color=$(this).css("background-color");
        console.log(color);
        $('body').css("background-color",color);
    }
);

