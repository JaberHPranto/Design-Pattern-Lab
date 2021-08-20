/* It is used when we need to returns one of several possible classes that shares a common super class, user don't have to know every potential subclass, decided in run time.Basic goal is hide object creation */

abstract class EnemyShip {
  private name: string;
  private amtDamage: number;

  setName(name: string) {
    this.name = name;
  }
  setAmtDamage(amtDamage: number) {
    this.amtDamage = amtDamage;
  }

  getName() {
    return this.name;
  }
  getAmtDamage() {
    return this.amtDamage;
  }

  followHeroShip(): void {
    console.log(`${this.getName()} follows Hero Ship`);
  }
  displayEnemyShip(): void {
    console.log(`${this.getName()} is on the screen`);
  }

  enemyShipAttack(): void {
    console.log(
      `${this.getName()} attacks and does ${this.getAmtDamage()} damage`
    );
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
  makeShips(name: string) {
    if (name === "ufo") return new UFOEnemyShip();
    else if (name === "rocket") return new RocketEnemyShip();
    else return null;
  }
}

const doStuffs = (enemyShip: EnemyShip) => {
  enemyShip.followHeroShip();
  enemyShip.displayEnemyShip();
  enemyShip.enemyShipAttack();
};

const esf: EnemyShipFactory = new EnemyShipFactory();
const enemyShip: EnemyShip = esf.makeShips("ufo");
const enemyShip2: EnemyShip = esf.makeShips("rocket");
// doStuffs(enemyShip);
// console.log("-------");
// doStuffs(enemyShip2);

/* Another Example -> Pizza store */
abstract class Pizza {
  abstract prepare(): void;
  abstract bake(): void;
  abstract cut(): void;
  abstract box(): void;
}

class NyStylePepperoniPizza extends Pizza {
  prepare(): void {
    console.log("Preparing NY style Pepperoni Pizza");
  }
  bake(): void {
    console.log("Baking NY style Pepperoni Pizza");
  }
  cut(): void {
    console.log("Cutting NY style Pepperoni Pizza");
  }
  box(): void {
    console.log("Boxing NY style Pepperoni Pizza");
  }
}
class NyStyleCheesePizza extends Pizza {
  prepare(): void {
    console.log("Preparing NY style Cheese Pizza");
  }
  bake(): void {
    console.log("Baking NY style Cheese Pizza");
  }
  cut(): void {
    console.log("Cutting NY style Cheese Pizza");
  }
  box(): void {
    console.log("Boxing NY style Cheese Pizza");
  }
}

abstract class PizzaStore {
  protected abstract createPizza(type: string): Pizza;
  orderPizza(type: string) {
    const pizza: Pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }
}

class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type === "pepperoni") return new NyStylePepperoniPizza();
    if (type === "cheese") return new NyStyleCheesePizza();
    else return null;
  }
}

const store = new NYPizzaStore();
store.orderPizza("cheese");
