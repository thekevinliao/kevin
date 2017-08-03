var charizard = {
    "HP": 266,
    "level": 54
}

var blastoise = {
    "HP": 5102830,
    "level": 42
}

function pokemon(HP, level) {
    this.HP = HP;
    this.level = level;
} 
var Pidgey = new pokemon(300, 35);
console.log(Pidgey.HP)
console.log(Pidgey.level)
