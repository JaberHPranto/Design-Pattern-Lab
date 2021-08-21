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

// Command Interface
interface Command {
  execute();
}

// Concrete Command Class
class AddCustomerCommand implements Command {
  acs: AddCustomerService;
  constructor(acc) {
    this.acs = acc;
  }
  execute() {
    this.acs.addCustomer();
  }
}
class DeleteCustomerCommand implements Command {
  acs: AddCustomerService;
  constructor(acc) {
    this.acs = acc;
  }
  execute() {
    this.acs.deleteCustomer();
  }
}
class UpdateCustomerCommand implements Command {
  acs: AddCustomerService;
  constructor(acc) {
    this.acs = acc;
  }
  execute() {
    this.acs.updateCustomer();
  }
}

// Invoker
class Button {
  private label: string;
  command: Command;
  constructor(command) {
    this.command = command;
  }
  setLabel(text: string) {
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

const acs: AddCustomerService = new AddCustomerService();
let button: Button = new Button(new AddCustomerCommand(acs));
button.click();
button = new Button(new DeleteCustomerCommand(acs));
button.click();
button = new Button(new UpdateCustomerCommand(acs));
button.click();
