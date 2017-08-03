function Car(color, weight) {
    this.color = color;
    this.weight = weight;
}

var Jeep = new Car("black", 1);


function Player(team, position, number) {
    this.team = team;
    this.position = position;
    this.number = number;
    this.sayTeam = function() {
        console.log("My team is " + this.team + ".");
    }
    this.sayPosition = function() {
        console.log("My position is " + this.position + ".");
    }
    this.sayNumber = function() {
        console.log("My number is " + this.number + ".");
    }
}

var jamesHarden = new Player("Rockets", "Point Guard", 13);

function Sandwich(bread, meat, veggies, cheese) {
    this.bread = bread;
    this.meat = meat;
    this.veggies = veggies;
    this.cheese = cheese;
}

var BLT = new Sandwich("White", "Bacon", "Lettuce");
console.log(BLT.meat);

function Company(employees, location) {
    this.employees = employees;
    this.location = location;
}

var Yahoo = new Company(85000, "New York and California");
console.log(Yahoo.employees);