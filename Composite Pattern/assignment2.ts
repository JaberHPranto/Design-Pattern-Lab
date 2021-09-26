abstract class Composite {
  protected name: string;
  protected type: string;
  abstract singleClick(): void;
  abstract doubleClick(): void;
}

// File Class
class _File extends Composite {
  constructor(name: string, type: string) {
    super();
    this.name = name;
    this.type = type;
  }
  singleClick(): void {
    console.log(`Name: ${this.name} , Type: ${this.type}`);
  }
  doubleClick(): void {
    console.log(`${this.name}.${this.type} file is opened`);
  }
}

// Folder Class
class _Folder extends Composite {
  private files: Composite[] = [];
  constructor(name: string, type: string) {
    super();
    this.name = name;
    this.type = type;
  }
  singleClick(): void {
    console.log(`Name: ${this.name} , Type: ${this.type}`);
  }

  add(file: Composite) {
    this.files.push(file);
  }

  remove(file: Composite) {
    const index = this.files.indexOf(file);
    this.files.splice(index, 1);
  }

  doubleClick(): void {
    console.log(`${this.name} folder is opened`);
    console.log(`Contents: `);
    for (let file of this.files) {
      file.singleClick();
    }
  }
}

// Test
let strategy = new _File("Strategy Pattern", "ppt");
let observer = new _File("Observer Pattern", "pdf");
let midSyllabus = new _File("MidSyllabus", "doc");
let composite = new _File("Component Pattern", "ppt");
let final_Syllabus = new _File("FinalSyllabus", "doc");
let assignment1 = new _File("Assignment-1", "pdf");
let assignment2 = new _File("Assignment-2", "pdf");
let readMe = new _File("readMe", "doc");
let midExam = new _Folder("Mid Exam", "folder");
let finalExam = new _Folder("Final Exam", "folder");
let lectures = new _Folder("Lecturers", "folder");
let assignments = new _Folder("Assignment Exam", "folder");
let DP = new _Folder("Design Pattern", "folder");

final_Syllabus.singleClick();
final_Syllabus.doubleClick();
console.log("---------------------");

midExam.add(strategy);
midExam.add(observer);

midExam.singleClick();
midExam.doubleClick();
console.log("---------------------");
midExam.add(midSyllabus);
finalExam.add(composite);
finalExam.add(finalExam);
lectures.add(midExam);
lectures.add(finalExam);
assignments.add(assignment1);
assignments.add(assignment2);
DP.add(lectures);
DP.add(readMe);
DP.add(assignments);

DP.singleClick();
DP.doubleClick();

DP.remove(readMe);
console.log("---------------------");

DP.singleClick();
DP.doubleClick();
