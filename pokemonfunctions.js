var alphabet = "abcdefghijklmnopqrstuvwxyz";
var uppAlphabet = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function randLetter() {
    var index = Math.floor(Math.random() * alphabet.length);
    return alphabet[index];
}
console.log(randLetter());

function randWord() {
    var index = Math.floor(Math.random() * alphabet.length);
    var numOfLetters = Math.floor(Math.random() * alphabet.length);
    var result = "";
    for(var i = alphabet.length; i > numOfLetters; i--) {
        result = result + alphabet[index];
        var index = Math.floor(Math.random() * alphabet.length);
    }
    return result;
}
console.log(randWord());

var result1 = "";
function randSentence() {
    var result = "";
    var index = Math.floor(Math.random() * alphabet.length);var index = Math.floor(Math.random() * alphabet.length);
    var numOfLetters = Math.floor(Math.random() * alphabet.length);
    var numOfWords = Math.floor(Math.random() * 10);
    for(var i = 0; i < numOfWords; i++) {
        for(var x = alphabet.length; x > numOfLetters; x--) {
            result = alphabet[index] + result;
            var index = Math.floor(Math.random() * alphabet.length);
        }
        result1 = result + " " + result1;
    }
    return result1 + ".";
}

console.log(uppAlphabet[alphabet.indexOf(randSentence()[0])] + randSentence()[]);