var pokemonRoster = [
    {"name": "Charizard", "type": "Fire", "hp": 78, "def": 104, "atk": 78, "legend": false },
    {"name": "Venusaur", "type": "Grass", "hp": 80, "def": 82, "atk": 83, "legend": false },
    {"name": "Blastoise", "type": "Water", "hp": 79, "def": 83, "atk": 100, "legend": false },
    {"name": "Butterfree", "type": "Bug", "hp": 60, "def": 45, "atk": 50, "legend":false },
    {"name": "Beedrill", "type": "Bug", "hp": 65, "def": 90, "atk": 40, "legend": false },
    {"name":"Mew", "type": "Psychic", "hp": 100, "def": 100, "atk": 100, "legend": true },
];

function printRoster(stuff){ //(atk, def, hp, legend, name, type) {
    for(var i = 0; i < stuff.length; i++) {
        for(var x = 0; x < stuff[0].length; x++) {
            console.log(stuff[i][x]);
        }
    }
}


// printRoster(pokemonRoster);

function pokemonAttacked(stuff) {
    for(var i = 0; i < stuff.length;i++) {        
            stuff[i].hp = stuff[i].hp - 10;        
            console.log(stuff[i]);
    }
}

// pokemonAttacked(pokemonRoster);

function subHp(stuff) {
    var prompt = require("Prompt-sync")();
    var subtract = prompt("How much damage?");
    var random = Math.floor(Math.random() * 6);    
    stuff[random].hp = stuff[random].hp - subtract;
    console.log(stuff[random]);
}


subHp(pokemonRoster);

function PokemonCreator() {
    this.name = "name";
    this.type = "type";
    this.hp = "hp";
    this.def = "def";
    this.atk = "atk";
    this.legend = "legend";
}
var prompt = require("Prompt-sync")();
var choose = prompt("What name do you want your pokemon to have?")
var choose1 = prompt("What type is your pokemon?")
var choose2 = prompt("How much hp does your pokemon have?")
var choose3 = prompt("How much defense does your pokemon have?")
var choose4 = prompt("How much attack does your pokemon have?")
var choose5 = prompt("Is your pokemon a legendary?")
var Kevin = new PokemonCreator(choose, choose1, choose2, choose3, choose4, choose5); 
pokemonRoster.push(Kevin);

function removePokemon(stuff) {
    var random = Math.floor(Math.random() * 6);
    
}





