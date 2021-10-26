// In State pattern a class behavior changes based on its state
// Concrete implementation on State interface
class SelectTool {
    mouseUp() {
        console.log("Selection Icon");
    }
    mouseDown() {
        console.log("Drawing a Rectangle");
    }
}
class BrushTool {
    mouseUp() {
        console.log("Brush Icon");
    }
    mouseDown() {
        console.log("Drawing a line");
    }
}
class EraseTool {
    mouseUp() {
        console.log("Erase Icon");
    }
    mouseDown() {
        console.log("Erase something");
    }
}
// Context
class Canvas {
    mouseUp() {
        this.tool.mouseUp();
    }
    mouseDown() {
        this.tool.mouseDown();
    }
    getTool() {
        return this.tool;
    }
    setTool(tool) {
        this.tool = tool;
    }
}
// Main
const canvas = new Canvas();
canvas.setTool(new SelectTool());
canvas.mouseUp();
canvas.mouseDown();
canvas.setTool(new EraseTool());
canvas.mouseUp();
canvas.mouseDown();
