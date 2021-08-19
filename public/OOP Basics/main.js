class Animal {
    setCordX(x) {
        this.cordX = x;
    }
    setCordY(y) {
        this.cordY = y;
    }
    eat() {
        console.log("I am eating");
    }
    sleep() {
        console.log("I am sleeping");
    }
    makeNoise() {
        console.log("I am making noises");
    }
    move() {
        console.log(`I'm at co-ordinate (${this.cordX},${this.cordY})`);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("Dog is barking");
    }
    move() {
        console.log("--- In dog class ---");
        super.move();
    }
}
class Cat extends Animal {
}
const cat = new Cat();
const dog = new Dog();
dog.setCordX(18);
dog.setCordY(40);
// cat.makeNoise();
// dog.makeNoise();
// dog.move();
class Hero {
    attack() {
        console.log("I'm attacking");
    }
    move() {
        console.log("I'm moving");
    }
}
class Archer extends Hero {
    attack() {
        super.attack();
        console.log("Firing an arrow -> ");
        this.arrows--;
    }
}
class Knight extends Hero {
    attack() {
        super.attack();
        console.log("Swinging a sword");
    }
}
class Mage extends Hero {
}
const archer = new Archer();
const knight = new Knight();
const mage = new Mage();
// archer.arrows = 10;
// archer.attack();
// knight.attack();
class Tribe {
    setHeros(heros) {
        this.heros = heros;
    }
    teamAttack() {
        for (let hero of this.heros) {
            hero.attack();
        }
    }
}
const tribe = new Tribe();
tribe.setHeros([archer, mage, knight]);
// tribe.teamAttack();
class Character {
    constructor(hunger, health) {
        this.health = health;
        this.hunger = hunger;
    }
    setHunger(hunger) {
        this.hunger = hunger;
    }
    setHealth(health) {
        this.health = health;
    }
    getHunger() {
        return this.hunger;
    }
    getHealth() {
        return this.health;
    }
}
class SuperHero extends Character {
    constructor(heroId, hunger, health) {
        super(hunger, health);
        this.heroId = heroId;
    }
    getHeroId() {
        console.log(`My Hero ID is ${this.heroId}`);
    }
}
const pranto = new SuperHero(140, 100, 84);
console.log(pranto.getHunger(), pranto.getHealth());
pranto.getHeroId();
