$(".think").click(
    function(){
        var think = $(this).text();
        $('.box').append(think)
    }
);

$(".equals").click(
    function(){
        var think = $('.box').text();
        console.log(math.evaluate(think));
        $('.box').text(math.evaluate(think))
    }
);



