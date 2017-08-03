//      Welcome to Rogelio's Boujee Bodega
//      In this person's hero adventure campaign,
//      the hero enters my bodega and has to spend
//      all his money before continuing.
//      He has to buy as much supplies as his money allows */

// Allows to use prompt
var prompt = require("Prompt-sync")();
var cat = "coolcat247";
var money = 1000;
var name = prompt("What is your name? ");

// var i = 0;
// while (i<10) {
//     console.log(i);
//     i++;
// }

while (money > 0) {
    var item = prompt("What do you want to buy? ");
    console.log("You have purchased " + item);
    money = money - 100;
}
if (money < 100) {
    console.log("You have no money.");
}





