
//Nested Arrays inside of the Array pokemonRoster to represent the stats of each pokemon
var pokemonRoster = [
    ["Charizard", "Fire", 78, 104, 78, false ],
    ["Venusaur", "Grass", 80, 82, 83, false ],
    ["Blastoise", "Water", 79, 83, 100, false ],
    ["Butterfree", "Bug", 60, 45, 50, false ],
    ["Beedrill", "Bug", 65, 90, 40, false ],
    ["Mew", "Psychic", 100, 100, 100, true ],
];

function stats(array) {
    result = "";
    for(var i = 0; i < array.length; i++) {
        for(var x = 0; x < array[0].length; x++) {
            result = result + array[i][x] + " ";
            if (x == 0) {
                result = result + " > TYPE: ";
            }
            if (x == 1) {
                result = result + " > HP: ";
            }
            if (x == 2) {
                result = result + " > ATK: ";
            }
            if (x == 3) {
                result = result + " > DEF: ";
            }
            if (x == 4) {
                result = result + " > Legend: ";
            } 
        
        }
        result = result + "\n" + "#" + (i + 1) + " ";
    }
    return result;
}

console.log(stats(pokemonRoster));
