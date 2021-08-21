abstract class EmailTemplate {
  sendEmail() {
    this.checkMail();
    // this.validateMessage();
    // this.sendEmail();
  }
  protected abstract checkMail();
  //   protected abstract validateMessage();
  //   protected abstract sendMail();
}

class GoogleEmail extends EmailTemplate {
  sendEmail() {
    this.checkMail();
    // this.validateMessage();
    // this.sendEmail();
  }
  protected checkMail() {
    console.log("Google Mail Checked");
  }
  //   protected validateMessage() {
  //     console.log("Google Mail Validated");
  //   }
  //   protected sendMail() {
  //     console.log("Google Mail Sent");
  //   }
}
// class YahooEmail extends EmailTemplate {
//   protected checkMail() {
//     console.log("Yahoo Mail Checked");
//   }
//   protected validateMessage() {
//     console.log("Yahoo Mail Validated");
//   }
//   protected sendMail() {
//     console.log("Yahoo Mail Sent");
//   }
// }

const google: EmailTemplate = new GoogleEmail();
google.sendEmail();
