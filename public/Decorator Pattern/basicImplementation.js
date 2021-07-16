// Base Component 
class Car {
    getDescription() {
        return this.description;
    }
}
// Concrete Component/ decorated object
class ModelS extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model S";
    }
    cost() {
        return 5000;
    }
}
class ModelX extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model X";
    }
    cost() {
        return 4000;
    }
}
// Base Decorator 
class CarOptions extends Car {
}
// Decorators
class EnhancedAutopilot extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ' has enhanced autopilot option';
    }
    cost() {
        return this.decoratedCar.cost() + 2500;
    }
}
class RearFacingSeats extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ' has rear facing seats';
    }
    cost() {
        return this.decoratedCar.cost() + 500;
    }
}
let myTesla = new ModelS();
myTesla = new EnhancedAutopilot(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
let myNewTeslaModel = new ModelX();
myNewTeslaModel = new EnhancedAutopilot(myNewTeslaModel);
myNewTeslaModel = new RearFacingSeats(myNewTeslaModel);
console.log(myNewTeslaModel.getDescription());
console.log(myNewTeslaModel.cost());
