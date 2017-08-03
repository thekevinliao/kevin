
// VARIABLES
var choices = ["rock", "paper", "scissors"];
var p1Choice = choices[Math.floor(Math.random() * 3) + 0];
var p2Choice = choices[Math.floor(Math.random() * 3) + 0];
//-----------------------------------------------------------------------
console.log("Player One chose: " + p1Choice);
console.log("Player Two chose: " + p2Choice);

if (p1Choice === p2Choice) {
    console.log("It's a tie");
}
if (p1Choice == "rock" && p2Choice == "paper") {
    console.log("Player Two Wins");
}
if (p1Choice == "paper" && p2Choice == "rock") {
    console.log("Player One Wins")
}
if (p1Choice == "scissors" && p2Choice == "rock") {
    console.log("Player Two Wins")
}
if (p1Choice == "rock" && p2Choice == "scissors") {
    console.log("Player One Wins")
}
if (p1Choice == "paper" && p2Choice == "scissors") {
    console.log("Player Two Wins")
}
if (p1Choice == "scissors" && p2Choice == "paper") {
    console.log("Player One Wins")
}


