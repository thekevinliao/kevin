var x = 0;
var y = 0;
function setup() {
    createCanvas(windowWidth,windowHeight);
    background('purple');
}


function draw() {
    background('purple');
    ellipse(x, 0, 100);
    fill(200,120,3);
    ellpise(x,0,200);
    x = x + 10
    if(x == width) {
        x = 0;
    }
}