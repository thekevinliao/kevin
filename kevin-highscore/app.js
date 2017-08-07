var rps = ["rock", "paper", "scissors"];
var randomNum = Math.floor(Math.random()*3);
var randomChoice = rps[randomNum];
var didWin = false;
var numOfTries = 0;
function chooseChoice(value) {
        if(value == "Rock" && randomChoice == "paper") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You lose.</p>")
        }
        else if(value == "Rock" && randomChoice == "rock") {
            $("#results").append("<p> The computer chose " + randomChoice + ". It's a tie.</p>")
            
        }
        else if(value == "Rock" && randomChoice == "scissors") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You win.</p>")
            didWin = true;
        }
        else if(value == "Paper" && randomChoice == "paper") {
            $("#results").append("<p> The computer chose " + randomChoice + ". It's a tie.</p>")
        }
        else if(value == "Paper" && randomChoice == "scissors") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You lose.</p>")
        }
        else if(value == "Paper" && randomChoice == "rock") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You win.</p>")
            didWin = true;
        }
        else if(value == "Scissors" && randomChoice == "rock") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You lose.</p>")
        }
        else if(value == "Scissors" && randomChoice == "paper") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You win.</p>")
            didWin = true;
        }
        else {
            $("#results").append("<p> The computer chose " + randomChoice + ". It's a tie.</p>")
        }
    randomNum = Math.floor(Math.random()*3);
    randomChoice = rps[randomNum];
    numOfTries = numOfTries + 1;
    if(didWin) {
        $("#results").append("<p>It took you " + numOfTries + " tries.</p>");
        var voteB =  document.getElementById("buttons");
        voteB.style.display='none';
    }
}