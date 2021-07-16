// Base court
abstract class tennisCourtBooking {
  public courtInfo: string;
  public getInfo(): string {
    return this.courtInfo;
  }
  public abstract cost(): number;
}

// // Concrete class from base component
class hardCourt extends tennisCourtBooking {
  public courtInfo = "This is Hard Court \n";
  public cost(): number {
    return 300;
  }
}
class clayCourt extends tennisCourtBooking {
  public courtInfo = "This is Clay  Court \n";
  public cost(): number {
    return 500;
  }
}
class grassCourt extends tennisCourtBooking {
  public courtInfo = "This is Grass Court \n";
  public cost(): number {
    return 1000;
  }
}

// Decorators
abstract class tennisCourtService extends tennisCourtBooking {
  tsb: tennisCourtBooking;
  public courtInfo: string;
  public getInfo(): string {
    return this.courtInfo;
  }
  public abstract cost(): number;
}

class racket extends tennisCourtService {
  tsb: tennisCourtBooking;
  constructor(tsb: tennisCourtBooking) {
    super();
    this.tsb = tsb;
  }
  public getInfo(): string {
    return this.tsb.getInfo() + ` Racket Added \n`;
  }
  public cost(): number {
    return this.tsb.cost() + 50;
  }
}

class umpire extends tennisCourtService {
  tsb: tennisCourtBooking;
  constructor(tsb: tennisCourtBooking) {
    super();
    this.tsb = tsb;
  }
  public getInfo(): string {
    return this.tsb.getInfo() + ` Umpire Service Added \n`;
  }
  public cost(): number {
    return this.tsb.cost() + 100;
  }
}

class tennisBalls extends tennisCourtService {
  tsb: tennisCourtBooking;
  constructor(tsb: tennisCourtBooking) {
    super();
    this.tsb = tsb;
  }
  public getInfo(): string {
    return this.tsb.getInfo() + ` Balls Added \n`;
  }
  public cost(): number {
    return this.tsb.cost() + 20;
  }
}

class foodPackage extends tennisCourtService {
  tsb: tennisCourtBooking;
  constructor(tsb: tennisCourtBooking) {
    super();
    this.tsb = tsb;
  }
  public getInfo(): string {
    return this.tsb.getInfo() + ` Food Package Added \n`;
  }
  public cost(): number {
    return this.tsb.cost() + 75;
  }
}

let court = new grassCourt();
court = new racket(court);
court = new tennisBalls(court);

console.log(court.getInfo());
console.log(court.cost());
