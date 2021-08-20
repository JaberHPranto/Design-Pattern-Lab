/* Provides an interface for creating families of related object without specifying an concrete class
It's like factory pattern but everything is encapsulated,It is factory of factories
 */

// In this example -> widget:button,text box ; -> Material theme : button,text box , Ant Design -> button,text box

interface Widget {
  render(): void;
}

interface Button extends Widget {}
interface TextBox extends Widget {}

// Material Design
class MaterialButton implements Button {
  render(): void {
    console.log("Material Button");
  }
}
class MaterialTextBox implements TextBox {
  render(): void {
    console.log("Material TextBox");
  }
}

// Ant Design
class AntButton implements Button {
  render(): void {
    console.log("Ant Button");
  }
}
class AntTextBox implements TextBox {
  render(): void {
    console.log("Ant TextBox");
  }
}

// Application Theme
enum Theme {
  MATERIAL,
  ANT,
}

/* Now widget factory is for creating button,textBox and other factories Mat and Ant is for generating those specific Mat based or Ant based button and text box. Hence it is factory of factories */
interface WidgetFactory {
  createButton(): Button;
  createTextBox(): TextBox;
}

class MaterialWidgetFactory implements WidgetFactory {
  createButton(): Button {
    return new MaterialButton();
  }
  createTextBox(): TextBox {
    return new MaterialTextBox();
  }
}

class AntWidgetFactory implements WidgetFactory {
  createButton(): Button {
    return new AntButton();
  }
  createTextBox(): TextBox {
    return new AntTextBox();
  }
}

// use in contact form
class ContactForm {
  render(widgetFactory: WidgetFactory) {
    widgetFactory.createButton().render();
    widgetFactory.createTextBox().render();
  }
}

// main
const form = new ContactForm();
form.render(new MaterialWidgetFactory());
form.render(new AntWidgetFactory());
