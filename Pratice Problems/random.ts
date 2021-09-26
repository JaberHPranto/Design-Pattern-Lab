interface Shape {
  draw(): void;
}

class Rectangle implements Shape {
  draw(): void {
    console.log("Rectangle");
  }
}
class Square implements Shape {
  draw(): void {
    console.log("Square");
  }
}
class RoundEdgeRectangle implements Shape {
  draw(): void {
    console.log("RoundEdged Rectangle");
  }
}
class RoundEdgeSquare implements Shape {
  draw(): void {
    console.log("RoundEdged Square");
  }
}

// Abstract Factory  -> Super Factory
abstract class AbstractFactory {
  protected abstract getShape(type: String): Shape;
  createShape(type: string) {
    const shape: Shape = this.getShape(type);
    shape.draw();
  }
}

// Factory
class ShapeFactory extends AbstractFactory {
  protected getShape(type: string): Shape {
    if (type === "rect") return new Rectangle();
    if (type === "sq") return new Square();
  }
}
class RoundedShapeFactory extends AbstractFactory {
  protected getShape(type: string): Shape {
    if (type === "r-rect") return new RoundEdgeRectangle();
    if (type === "r-sq") return new RoundEdgeSquare();
  }
}

const sf = new ShapeFactory();
sf.createShape("sq");
const rsf = new RoundedShapeFactory();
rsf.createShape("r-rect");
