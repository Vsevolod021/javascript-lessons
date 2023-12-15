class CoffeeMachine {
  #waterLimit = 200;

  showWaterLimit() {
    return this.#waterLimit;
  }
}

const machineItem = new CoffeeMachine();

// machineItem.showWaterLimit();

console.log(machineItem.showWaterLimit());