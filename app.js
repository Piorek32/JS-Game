var holes = document.querySelectorAll('.hole')
var mole = document.querySelectorAll('.mole')


var lastHole

function renderTime(min, max) {
    return Math.floor(Math.random() * (max-min)+ max);

}



function randoHole(holes) {
    var idx =  Math.floor(Math.random() *holes.length);
    var hole = holes[idx]
    console.log(hole)

}