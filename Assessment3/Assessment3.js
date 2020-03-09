$(".one").click(
    function(){
        var color = $(this).css("background-color");
        console.log(color);
        $('#display').css("background-color",color);
        $('#display').css(color);
    }
);

$(".two").click(
    function(){
        var color = $(this).css("background-color");
        console.log(color);
        $('#display').css("background-color",color);
        $('#display').css(color);
        
    }
);

$(".three").click(
    function(){
        var color = $(this).css("background-color");
        console.log(color);
        $('#display').css("background-color",color);
        $('#display').css(color);
        $('#display').text('3');
    }
);

$(".four").click(
    function(){
        var color = $(this).css("background-color");
        console.log(color);
        $('#display').css("background-color",color);
        $('#display').css(color);
        $('#display').text('4');
    }
);

$(".five").click(
    function(){
        var color = $(this).css("background-color");
        console.log(color);
        $('#display').css("background-color",color);
        $('#display').css(color);
        $('#display').text('5');
        var random = Math.floor(Math.random() *100);
        document.getElementById("six").innerHTML = random;
    }
);

$(".six").click(
    function(){
        var color = $(this).css("background-color");
        console.log(color);
        $('#display').css("background-color",color);
        $('#display').css(color);
        $('#display').text('');
    }
);