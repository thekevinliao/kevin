var x = 0;
var a = 0;
var inp;
var y = 0;
var points = 0;
var array = ["bruh", "hi", "cool", "smile", "dog", "cat","asparagus", "aunt", "blouse", "bone", "homework", "preference", "thanks", "wolf", "chef", "data", "factor", "invention", "luck", "most", "pastoralist", "pickax", "temporariness", "ant", "catsup", "eel", "glad", "hold", "leash", "mousse", "mouse", "moustache", "ornament"];
var pointIncrement = 10;
var randomNum = Math.floor(Math.random() * array.length);
function setup() {
    createCanvas(windowWidth, windowHeight);
    inp = createInput("");
    inp.position(150,50);
    inp.size(150,30);
    inp.elt.focus();
    //inp.move('character', caretPos);
    // inp.focus();
    // inp.select();
    
}


// function mousePressed() {
//     console.log(mouseX + "," + mouseY);
// }
function draw() {
    textSize(20);
    if(x > 20) {
        x = 0;
        a = a + 80;
    }
    text(array[randomNum], 40 + a, 30*x + 110);
    text("points: " + points, 150, 20);
    
}




function keyTyped() {
    if(key == " ") {
        if (inp.value() === array[randomNum]) {
            background('white');
            points = points + pointIncrement;
            x++;
            randomNum = Math.floor(Math.random() * array.length);
            inp = createInput("");
            inp.position(150,50);
            inp.size(150,30);
            inp.elt.focus();
        } else{
            background('white');
            points = points - pointIncrement;
            x++;
            randomNum = Math.floor(Math.random() * array.length);
            inp = createInput("");
            inp.position(150,50);
            inp.size(150,30);
            inp.elt.focus();
        }
    }
}