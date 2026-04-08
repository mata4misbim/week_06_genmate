const Drink = require("./Drink.js");

class Softdrink extends Drink {
  constructor(name, type, onHand, sugar) {
    super(name, type, onHand);
    this.sugar = sugar;
  }

  drink() {
    console.log(`${this.name} is being drunk`);
  }
}

const myDrink = new Softdrink("coke", "Softdrink", 99, 10);
coke.drink();
