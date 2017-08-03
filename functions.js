// function welloHorld(message) {
//     return message;
//     var x = 5;
//     console.log(x);
// }
// console.log(welloHorld("Wello Horld!"));
function random(number) {
    var x = Math.floor(Math.random() * (number) + 1);
    return x;
}

console.log(random(5));
// declare an array with two Cool Nick entries to increase his odds
var people = ["Chris", "Will", "Cool Nick", "Edgar", "Faisal", "Cool Nick"];
//function to get a random number
function getRandomWinner(index) {
    // Returns a random integer from 0 to the index
    return Math.floor(Math.random(index));

}

//Prints out a random name based to the function
console.log(people[getRandomWinner(people.length)]);
