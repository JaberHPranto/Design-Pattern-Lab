// We have to build a GUI which can have buttons,textBoxes etc. Let's say we have bunch of button and on button clicked we have to perform different task.Command pattern solves this kinds of problems
// Receiver
class AddCustomerService {
    addCustomer() {
        console.log("Customer Added");
    }
    deleteCustomer() {
        console.log("Customer Deleted");
    }
    updateCustomer() {
        console.log("Customer Record Updated");
    }
}
// Concrete Command Class
class AddCustomerCommand {
    constructor(acc) {
        this.acs = acc;
    }
    execute() {
        this.acs.addCustomer();
    }
}
class DeleteCustomerCommand {
    constructor(acc) {
        this.acs = acc;
    }
    execute() {
        this.acs.deleteCustomer();
    }
}
class UpdateCustomerCommand {
    constructor(acc) {
        this.acs = acc;
    }
    execute() {
        this.acs.updateCustomer();
    }
}
// Invoker
class _Button {
    constructor(command) {
        this.command = command;
    }
    setLabel(text) {
        this.label = text;
    }
    getLabel() {
        return this.label;
    }
    // Command pattern should determine which action to perform
    click() {
        this.command.execute();
    }
}
const acs = new AddCustomerService();
let button = new _Button(new AddCustomerCommand(acs));
button.click();
button = new _Button(new DeleteCustomerCommand(acs));
button.click();
button = new _Button(new UpdateCustomerCommand(acs));
button.click();
