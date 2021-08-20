/* Provides an interface for creating families of related object without specifying an concrete class
It's like factory pattern but everything is encapsulated,It is factory of factories
 */
// Material Design
class MaterialButton {
    render() {
        console.log("Material Button");
    }
}
class MaterialTextBox {
    render() {
        console.log("Material TextBox");
    }
}
// Ant Design
class AntButton {
    render() {
        console.log("Ant Button");
    }
}
class AntTextBox {
    render() {
        console.log("Ant TextBox");
    }
}
// Application Theme
var Theme;
(function (Theme) {
    Theme[Theme["MATERIAL"] = 0] = "MATERIAL";
    Theme[Theme["ANT"] = 1] = "ANT";
})(Theme || (Theme = {}));
class MaterialWidgetFactory {
    createButton() {
        return new MaterialButton();
    }
    createTextBox() {
        return new MaterialTextBox();
    }
}
class AntWidgetFactory {
    createButton() {
        return new AntButton();
    }
    createTextBox() {
        return new AntTextBox();
    }
}
// use in contact form
class ContactForm {
    render(widgetFactory) {
        widgetFactory.createButton().render();
        widgetFactory.createTextBox().render();
    }
}
// main
const form = new ContactForm();
form.render(new MaterialWidgetFactory());
form.render(new AntWidgetFactory());
