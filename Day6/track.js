init();

function init(){
    for(var r=0; r<9; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace();
}

function startRace(){
    TweenMax.to("#car1",2,{x:500, y:10, ease:Sine.easeOut});
    TweenMax.to("#car1",.25,{rotation:-90,delay:1.3, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:500, y:-290,delay:1.7, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-50, y:-290,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",.25,{rotation:-180,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:-100, y:-290,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:-100, y:10,delay:4.75, ease:Sine.easeOut});
    TweenMax.to("#car1",.25,{rotation:-270,delay:4., ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:250, y:10,delay:6.5, ease:Sine.easeOut});
    TweenMax.to("#car1",.25,{rotation:-360,delay:6.1, ease:Sine.easeOut});
    
    TweenMax.to("#car2",2,{x:560, y:10, delay:.5, ease:Sine.easeOut});
    TweenMax.to("#car2",.25,{rotation:-90,delay:3.1, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:560, y:-350,delay:3.5, ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:-50, y:-290,delay:4.5, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:-50, y:-290,delay:4.5, ease:Sine.easeOut});
    TweenMax.to("#car2",.25,{rotation:-180,delay:4.1, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:-50, y:10,delay:6, ease:Sine.easeOut});
    TweenMax.to("#car2",.25,{rotation:-270,delay:5.6, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:250, y:10,delay:8, ease:Sine.easeOut});
    TweenMax.to("#car2",.25,{rotation:-360,delay:7.6, ease:Sine.easeOut});
    
    TweenMax.to("#car3",2,{x:600, y:10, delay:2, ease:Sine.easeOut});
    TweenMax.to("#car3",.25,{rotation:-90,delay:3.6, ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:600, y:-300,delay:4, ease:Sine.easeOut});
    TweenMax.to("#car3",.25,{rotation:-180,delay:5, ease:Sine.easeOut});
    TweenMax.to("#car3",2,{x:0, y:-300,delay:5.5, ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:0, y:-300,delay:10, ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:0, y:10,delay:8, ease:Sine.easeOut});
    TweenMax.to("#car3",.25,{rotation:-270,delay:7, ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:250, y:10,delay:10, ease:Sine.easeOut});
    TweenMax.to("#car3",.25,{rotation:-360,delay:9.6, ease:Sine.easeOut});
}

