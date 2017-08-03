var prompt = require('Prompt-sync')();
var mashArray = ["Battlefield", "Dreamland", "Final Destination", "Yoshi's Island"];
var firstQuestion = ["10", "20"];
var secondQuestion = ["Fox", "Falco"];
console.log("-----------------------------STAGE SELECT-----------------------------------------");
var stageSelect = prompt("CHOOSE YOUR STAGE! ");
// console.log("YOU HAVE CHOSEN " + stageSelect);
// var hitSelect = prompt("How many times will you strike? ");
// var characterSelect = prompt("Who will you choose to fight? ");
var random0 = Math.floor(Math.random() * 3);
var random1 = Math.floor(Math.random() * 4);
var random2 = Math.floor(Math.random() * 3);
function answers() {
    var hitSelect = prompt("How many times will you strike? ");
    firstQuestion.push(hitSelect);
    var characterSelect = prompt("Who will you choose to fight? ");
    secondQuestion.push(characterSelect);
}
answers();
function battle() {
    console.log("You fought " + secondQuestion[random0] + " in " + mashArray[random1] +  " and hit him " + firstQuestion[random2] + " times. Too bad. Mewtwo wins!"); 
}

battle();
firstQuestion = firstQuestion + "30";
//console.log(firstQuestion);