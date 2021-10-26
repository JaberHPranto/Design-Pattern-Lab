//Memento pattern is used to restore state of an object to a previous state . Basically perform undo mechanism
// Memento -> contain object that needs to be restored
class EditorState {
    constructor(contentState) {
        this.contentState = contentState;
    }
    getContentState() {
        return this.contentState;
    }
}
// Caretaker -> state management
class EditorHistory {
    constructor() {
        this.states = [];
    }
    pushEditorState(state) {
        this.states.push(state);
    }
    popEditorState() {
        this.states.pop();
        let lastState = this.states[this.states.length - 1];
        return lastState;
    }
}
// Originator -> create and store state
class Editor {
    createState() {
        return new EditorState(this.content);
    }
    restore(editorState) {
        this.content = editorState.getContentState();
    }
    getContent() {
        return this.content;
    }
    setContent(value) {
        this.content = value;
    }
}
const editor = new Editor();
const eh = new EditorHistory();
editor.setContent("\n\n This is memento pattern !!!\n\n");
eh.pushEditorState(editor.createState());
editor.setContent("\n\n This is my new state of content !!!\n\n");
eh.pushEditorState(editor.createState());
editor.setContent("\n\n This actually works !!!\n\n");
eh.pushEditorState(editor.createState());
// now go back to previous state
editor.restore(eh.popEditorState());
editor.restore(eh.popEditorState());
console.log(editor.getContent());
