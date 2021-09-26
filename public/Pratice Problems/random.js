class Rectangle {
    draw() {
        console.log("Rectangle");
    }
}
class Square {
    draw() {
        console.log("Square");
    }
}
class RoundEdgeRectangle {
    draw() {
        console.log("RoundEdged Rectangle");
    }
}
class RoundEdgeSquare {
    draw() {
        console.log("RoundEdged Square");
    }
}
// Abstract Factory  -> Super Factory
class AbstractFactory {
    createShape(type) {
        const shape = this.getShape(type);
        shape.draw();
    }
}
// Factory
class ShapeFactory extends AbstractFactory {
    getShape(type) {
        if (type === "rect")
            return new Rectangle();
        if (type === "sq")
            return new Square();
    }
}
class RoundedShapeFactory extends AbstractFactory {
    getShape(type) {
        if (type === "r-rect")
            return new RoundEdgeRectangle();
        if (type === "r-sq")
            return new RoundEdgeSquare();
    }
}
const sf = new ShapeFactory();
sf.createShape("sq");
const rsf = new RoundedShapeFactory();
rsf.createShape("r-rect");
