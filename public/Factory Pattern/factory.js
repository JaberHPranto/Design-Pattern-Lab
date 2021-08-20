/* It is used when we need to returns one of several possible classes that shares a common super class, user don't have to know every potential subclass, decided in run time.Basic goal is hide object creation */
class EnemyShip {
    setName(name) {
        this.name = name;
    }
    setAmtDamage(amtDamage) {
        this.amtDamage = amtDamage;
    }
    getName() {
        return this.name;
    }
    getAmtDamage() {
        return this.amtDamage;
    }
    followHeroShip() {
        console.log(`${this.getName()} follows Hero Ship`);
    }
    displayEnemyShip() {
        console.log(`${this.getName()} is on the screen`);
    }
    enemyShipAttack() {
        console.log(`${this.getName()} attacks and does ${this.getAmtDamage()} damage`);
    }
}
class UFOEnemyShip extends EnemyShip {
    constructor() {
        super();
        this.setName("UFO Ship");
        this.setAmtDamage(20);
    }
}
class RocketEnemyShip extends EnemyShip {
    constructor() {
        super();
        this.setName("Rocket Ship");
        this.setAmtDamage(50);
    }
}
class EnemyShipFactory {
    makeShips(name) {
        if (name === "ufo")
            return new UFOEnemyShip();
        else if (name === "rocket")
            return new RocketEnemyShip();
        else
            return null;
    }
}
const doStuffs = (enemyShip) => {
    enemyShip.followHeroShip();
    enemyShip.displayEnemyShip();
    enemyShip.enemyShipAttack();
};
const esf = new EnemyShipFactory();
const enemyShip = esf.makeShips("ufo");
const enemyShip2 = esf.makeShips("rocket");
// doStuffs(enemyShip);
// console.log("-------");
// doStuffs(enemyShip2);
/* Another Example -> Pizza store */
class Pizza {
}
class NyStylePepperoniPizza extends Pizza {
    prepare() {
        console.log("Preparing NY style Pepperoni Pizza");
    }
    bake() {
        console.log("Baking NY style Pepperoni Pizza");
    }
    cut() {
        console.log("Cutting NY style Pepperoni Pizza");
    }
    box() {
        console.log("Boxing NY style Pepperoni Pizza");
    }
}
class NyStyleCheesePizza extends Pizza {
    prepare() {
        console.log("Preparing NY style Cheese Pizza");
    }
    bake() {
        console.log("Baking NY style Cheese Pizza");
    }
    cut() {
        console.log("Cutting NY style Cheese Pizza");
    }
    box() {
        console.log("Boxing NY style Cheese Pizza");
    }
}
class PizzaStore {
    orderPizza(type) {
        const pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }
}
class NYPizzaStore extends PizzaStore {
    createPizza(type) {
        if (type === "pepperoni")
            return new NyStylePepperoniPizza();
        if (type === "cheese")
            return new NyStyleCheesePizza();
        else
            return null;
    }
}
const store = new NYPizzaStore();
store.orderPizza("cheese");
