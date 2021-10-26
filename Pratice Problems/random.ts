/****  State Pattern  ****/

// State
interface MobileAlertState {
  alert(): void;
}

// Concrete implementation of State class
class Ringing implements MobileAlertState {
  alert() {
    console.log("Phone is in ringing state");
  }
}
class Vibration implements MobileAlertState {
  alert() {
    console.log("Phone is in vibration state");
  }
}
class Silent implements MobileAlertState {
  alert() {
    console.log("Phone is silent state");
  }
}

// Context
class MobileAlertContext {
  private currentContext: MobileAlertState;

  constructor() {
    this.currentContext = new Ringing();
  }

  alert() {
    this.currentContext.alert();
  }

  setContext(context: MobileAlertState): void {
    this.currentContext = context;
  }

  getContext(): MobileAlertState {
    return this.currentContext;
  }
}

// Main
const mobile = new MobileAlertContext();
mobile.setContext(new Silent());
// mobile.alert();

/****  Composite Pattern  ****/
interface Component {
  showPrice(): void;
}

class _Leaf implements Component {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  showPrice() {
    console.log(`${this.name} : ${this.price}\n`);
  }
}
class _Composite implements Component {
  name: string;
  leafCom: Array<Component> = [];

  constructor(name: string) {
    this.name = name;
  }
  addComp(leaf: Component) {
    this.leafCom.push(leaf);
  }

  showPrice() {
    console.log(`${this.name} \n`);
    for (let com of this.leafCom) com.showPrice();
  }
}

// Client Code

const hd: Component = new _Leaf("HDD", 3750);
const mouse: Component = new _Leaf("Mouse", 1200);
const keyboard: Component = new _Leaf("Keyboard", 3450);
const ram: Component = new _Leaf("Ram", 4200);

const motherboard: _Composite = new _Composite("Motherboard");
motherboard.addComp(hd);
motherboard.addComp(ram);

const peripherals: _Composite = new _Composite("Peripherals");
peripherals.addComp(mouse);
peripherals.addComp(keyboard);

const _computer: _Composite = new _Composite("Computer");
_computer.addComp(motherboard);
_computer.addComp(peripherals);

ram.showPrice();
motherboard.showPrice();
_computer.showPrice();
