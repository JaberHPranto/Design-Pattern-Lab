// Base court
class tennisCourtBooking {
    getInfo() {
        return this.courtInfo;
    }
}
// // Concrete class from base component
class hardCourt extends tennisCourtBooking {
    constructor() {
        super(...arguments);
        this.courtInfo = "This is Hard Court \n";
    }
    cost() {
        return 300;
    }
}
class clayCourt extends tennisCourtBooking {
    constructor() {
        super(...arguments);
        this.courtInfo = "This is Clay  Court \n";
    }
    cost() {
        return 500;
    }
}
class grassCourt extends tennisCourtBooking {
    constructor() {
        super(...arguments);
        this.courtInfo = "This is Grass Court \n";
    }
    cost() {
        return 1000;
    }
}
// Decorators
class tennisCourtService extends tennisCourtBooking {
    getInfo() {
        return this.courtInfo;
    }
}
class racket extends tennisCourtService {
    constructor(tsb) {
        super();
        this.tsb = tsb;
    }
    getInfo() {
        return this.tsb.getInfo() + ` Racket Added \n`;
    }
    cost() {
        return this.tsb.cost() + 50;
    }
}
class umpire extends tennisCourtService {
    constructor(tsb) {
        super();
        this.tsb = tsb;
    }
    getInfo() {
        return this.tsb.getInfo() + ` Umpire Service Added \n`;
    }
    cost() {
        return this.tsb.cost() + 100;
    }
}
class tennisBalls extends tennisCourtService {
    constructor(tsb) {
        super();
        this.tsb = tsb;
    }
    getInfo() {
        return this.tsb.getInfo() + ` Balls Added \n`;
    }
    cost() {
        return this.tsb.cost() + 20;
    }
}
class foodPackage extends tennisCourtService {
    constructor(tsb) {
        super();
        this.tsb = tsb;
    }
    getInfo() {
        return this.tsb.getInfo() + ` Food Package Added \n`;
    }
    cost() {
        return this.tsb.cost() + 75;
    }
}
let court = new grassCourt();
court = new racket(court);
court = new tennisBalls(court);
console.log(court.getInfo());
console.log(court.cost());
