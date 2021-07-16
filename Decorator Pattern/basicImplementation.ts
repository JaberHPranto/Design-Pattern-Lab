// Base Component 
abstract class Car {
    public description: string;
    public getDescription(): string{
        return this.description
    }
    public abstract cost(): number;
}

// Concrete Component/ decorated object
class ModelS extends Car{
    public description = "Model S"
    public cost(): number {
        return 5000
    }
    
}

class ModelX extends Car{
    public description = "Model X"
    public cost(): number {
        return 4000
    }
    
}

// Base Decorator 
abstract class CarOptions extends Car {
    public decoratedCar : Car
    public abstract getDescription(): string
    public abstract cost():number
}


// Decorators
class EnhancedAutopilot extends CarOptions{

    public decoratedCar: Car
    constructor(car: Car) {
        super();
        this.decoratedCar = car
    }
    public getDescription(): string {
        return this.decoratedCar.getDescription()+' has enhanced autopilot option'
    }
    public cost(): number {
        return this.decoratedCar.cost() + 2500
    }

}


class RearFacingSeats extends CarOptions{

    public decoratedCar: Car
    constructor(car: Car) {
        super();
        this.decoratedCar = car
    }
    public getDescription(): string {
        return this.decoratedCar.getDescription()+' has rear facing seats'
    }
    public cost(): number {
        return this.decoratedCar.cost() + 500
    }

}


let myTesla = new ModelS()
myTesla = new EnhancedAutopilot(myTesla)

console.log(myTesla.getDescription())
console.log(myTesla.cost())

let myNewTeslaModel = new ModelX()
myNewTeslaModel = new EnhancedAutopilot(myNewTeslaModel)
myNewTeslaModel = new RearFacingSeats(myNewTeslaModel)

console.log(myNewTeslaModel.getDescription())
console.log(myNewTeslaModel.cost())