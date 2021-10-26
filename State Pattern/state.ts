// In State pattern a class behavior changes based on its state

// Change photo-shop cursor based on tool selected
// The canvas behaves differently based on the selected tool

// State Interface
interface Tool {
  mouseUp(): void;
  mouseDown(): void;
}

// Concrete implementation on State interface
class SelectTool implements Tool {
  mouseUp(): void {
    console.log("Selection Icon");
  }
  mouseDown(): void {
    console.log("Drawing a Rectangle");
  }
}
class BrushTool implements Tool {
  mouseUp(): void {
    console.log("Brush Icon");
  }
  mouseDown(): void {
    console.log("Drawing a line");
  }
}
class EraseTool implements Tool {
  mouseUp(): void {
    console.log("Erase Icon");
  }
  mouseDown(): void {
    console.log("Erase something");
  }
}

// Context
class Canvas {
  private tool: Tool;
  mouseUp() {
    this.tool.mouseUp();
  }
  mouseDown() {
    this.tool.mouseDown();
  }
  getTool() {
    return this.tool;
  }
  setTool(tool: Tool) {
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
