var pokemonRoster = ["pidgey", "rattata", "metapod", "kakuna", "bidoof"];
var firstToFight = pokemonRoster[0];
var secondToFight = pokemonRoster[1];
var rosterSize = pokemonRoster.length;
// pokemonRoster.pop();
// pokemonRoster.push("zubat","weedle");
// console.log(pokemonRoster);
if(pokemonRoster.length < 5) {
    console.log("You Can’t Play! Not Enough Pokemon")
} else {
    for(var i = 0; i < pokemonRoster.length;i++) {
        console.log(i + ".) " + pokemonRoster[i])
    }
    console.log("");
    for(var i = pokemonRoster.length - 1; i > -1; i--) {
        console.log(i + ".) " + pokemonRoster[i]);
    }
}


//for(var i = 0; i < pokemonRoster.length; i++)