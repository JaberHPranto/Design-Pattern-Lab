//Memento pattern is used to restore state of an object to a previous state . Basically perform undo mechanism

// Memento -> contain object that needs to be restored
class EditorState {
  private contentState: string;
  constructor(contentState: string) {
    this.contentState = contentState;
  }

  getContentState(): string {
    return this.contentState;
  }
}

// Caretaker -> state management
class EditorHistory {
  states: Array<EditorState> = [];

  pushEditorState(state: EditorState) {
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
  private content: string;
  createState() {
    return new EditorState(this.content);
  }
  restore(editorState: EditorState) {
    this.content = editorState.getContentState();
  }
  public getContent(): string {
    return this.content;
  }
  public setContent(value: string) {
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
