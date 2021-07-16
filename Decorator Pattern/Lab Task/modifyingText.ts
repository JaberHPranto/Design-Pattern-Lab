/*  
Design a decorator pattern scenario for modifying text (Bold,Italic or Strike) configured by a user 
*/
abstract class DefaultText{
    public userText: string;
    public abstract getText(): string
    
}

class userInputText extends DefaultText{
    public userText: string
    constructor(userText: string) {
        super()
        this.userText = userText
    }
    public getText(): string {
        return this.userText
    }
}


abstract class TextDecoratorOptions extends DefaultText {
    public defaultText: DefaultText
    public userText: string;
    public abstract getText(): string
}


class TextBold extends TextDecoratorOptions{
    public defaultText: DefaultText

    constructor(defaultText: DefaultText) {
        super()
        this.defaultText = defaultText
    }
    
    public getText(): string {
        return `Bold Text : ` + this.defaultText.userText.bold()
    }
    
}

class TextItalic extends TextDecoratorOptions{
    public defaultText: DefaultText

    constructor(defaultText: DefaultText) {
        super()
        this.defaultText = defaultText
    }
    
    public getText(): string {
        return `Italic Text : ` + this.defaultText.userText.italics()
    }
    
}

class TextStrike extends TextDecoratorOptions{
    public defaultText: DefaultText

    constructor(defaultText: DefaultText) {
        super()
        this.defaultText = defaultText
    }
    
    public getText(): string {
        return `Strike Text : ` + this.defaultText.userText.strike()
    }
    
}


// Test
let input1 = new userInputText('Hello World, I am bold text')
input1 = new TextBold(input1)
console.log(input1.getText())

let input2 = new userInputText('Hello World, I am italic text')
input2 = new TextItalic(input2)
console.log(input2.getText())

let input3 = new userInputText('Hello World, I am strike text')
input3 = new TextStrike(input3)
console.log(input3.getText())