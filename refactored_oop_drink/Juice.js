const Drink = require("./Drink.js");

class Juice extends Drink {
  constructor(name, type, onhand,madefrom) {
    super(name,type,onhand,madefrom);
    this.madefrom = madefrom;
  }
}
const orangeJuice = new Juice("Doikum", "Juice", "10","oragne");
console.log(orangeJuice);
//module.exports = Juice;
