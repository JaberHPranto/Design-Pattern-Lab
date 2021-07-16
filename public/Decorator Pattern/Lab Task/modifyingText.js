/*
Design a decorator pattern scenario for modifying text (Bold,Italic or Strike) configured by a user
*/
class DefaultText {
}
class userInputText extends DefaultText {
    constructor(userText) {
        super();
        this.userText = userText;
    }
    getText() {
        return this.userText;
    }
}
class TextDecoratorOptions extends DefaultText {
}
class TextBold extends TextDecoratorOptions {
    constructor(defaultText) {
        super();
        this.defaultText = defaultText;
    }
    getText() {
        return `Bold Text : ` + this.defaultText.userText.bold();
    }
}
class TextItalic extends TextDecoratorOptions {
    constructor(defaultText) {
        super();
        this.defaultText = defaultText;
    }
    getText() {
        return `Italic Text : ` + this.defaultText.userText.italics();
    }
}
class TextStrike extends TextDecoratorOptions {
    constructor(defaultText) {
        super();
        this.defaultText = defaultText;
    }
    getText() {
        return `Strike Text : ` + this.defaultText.userText.strike();
    }
}
// Test
let input1 = new userInputText('Hello World, I am bold text');
input1 = new TextBold(input1);
console.log(input1.getText());
let input2 = new userInputText('Hello World, I am italic text');
input2 = new TextItalic(input2);
console.log(input2.getText());
let input3 = new userInputText('Hello World, I am strike text');
input3 = new TextStrike(input3);
console.log(input3.getText());
