/****  State Pattern  ****/
// Concrete implementation of State class
class Ringing {
    alert() {
        console.log("Phone is in ringing state");
    }
}
class Vibration {
    alert() {
        console.log("Phone is in vibration state");
    }
}
class Silent {
    alert() {
        console.log("Phone is silent state");
    }
}
// Context
class MobileAlertContext {
    constructor() {
        this.currentContext = new Ringing();
    }
    alert() {
        this.currentContext.alert();
    }
    setContext(context) {
        this.currentContext = context;
    }
    getContext() {
        return this.currentContext;
    }
}
// Main
const mobile = new MobileAlertContext();
mobile.setContext(new Silent());
class _Leaf {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    showPrice() {
        console.log(`${this.name} : ${this.price}\n`);
    }
}
class _Composite {
    constructor(name) {
        this.leafCom = [];
        this.name = name;
    }
    addComp(leaf) {
        this.leafCom.push(leaf);
    }
    showPrice() {
        console.log(`${this.name} \n`);
        for (let com of this.leafCom)
            com.showPrice();
    }
}
// Client Code
const hd = new _Leaf("HDD", 3750);
const mouse = new _Leaf("Mouse", 1200);
const keyboard = new _Leaf("Keyboard", 3450);
const ram = new _Leaf("Ram", 4200);
const motherboard = new _Composite("Motherboard");
motherboard.addComp(hd);
motherboard.addComp(ram);
const peripherals = new _Composite("Peripherals");
peripherals.addComp(mouse);
peripherals.addComp(keyboard);
const _computer = new _Composite("Computer");
_computer.addComp(motherboard);
_computer.addComp(peripherals);
ram.showPrice();
motherboard.showPrice();
_computer.showPrice();
