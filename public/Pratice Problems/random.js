class EmailTemplate {
    sendEmail() {
        this.checkMail();
        // this.validateMessage();
        // this.sendEmail();
    }
}
class GoogleEmail extends EmailTemplate {
    sendEmail() {
        this.checkMail();
        // this.validateMessage();
        // this.sendEmail();
    }
    checkMail() {
        console.log("Google Mail Checked");
    }
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
const google = new GoogleEmail();
google.sendEmail();
