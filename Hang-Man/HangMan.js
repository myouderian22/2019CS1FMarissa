var color1 = 'yellow';
var player = NaN;

$('.letterBox').click(
    function() {
        $(this).css("background-color", color1);
        console.log(color1);
    }
);

$('#player1').click(
    function() {
        player = 1;
    }
);

$('#player2').click(
    function() {
        player = 2;
    }
);