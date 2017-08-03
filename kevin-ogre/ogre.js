var HP = 100;
var gold = 0;
var ogreDefeated = 0;
// --------------------------------------------------------------------------------
function displayStats() {
    $("#stats").text("it worksjdkl;ajsdl;jf;jweioua;fl;jsljk;jkl;j;lkfdsa;lj;jkd;jlkfd;ljdfjl;")
}
function attack() {
    alert("You just ended the life of something with a loving wife and family that will wonder where it went and when they find out it was murdered, they will cry for years and hate you for years. Congratulations!")
}
function setup() {
    $("body").append("<h1><center>sup<center></h1>");
    $("body").append("<div><h2>Stats</h2><p id='stats'></p></div>");
    $("body").append("<button onClick='attack()'>attack</button>");
    $("body").append("<div id='ogre'></div>");
}
$(document).ready(setup)
