// interface
interface Observer {
  update(
    courseNo: string,
    teacherName: string,
    topicName: string,
    time: string
  );
}

interface Subject {
  registerObservers(o: Observer);
  removeObservers(o: Observer);
  notifyObservers();
}

// subject - whom we observe for any change
class ClassData implements Subject {
  // track changes of the fields
  private courseNo: string;
  private teacherName: string;
  private topicName: string;
  private time: string;

  // all the observers subscribe to this Subject
  observers: Array<Observer> = [];

  registerObservers(o: Observer) {
    this.observers.push(o);
  }
  removeObservers(o: Observer) {
    const index = this.observers.indexOf(o);
    this.observers = this.observers.splice(index, 1);
  }
  notifyObservers() {
    this.observers.forEach((o) =>
      o.update(this.courseNo, this.teacherName, this.topicName, this.time)
    );
  }

  // measuring what has been changed
  public measureChanged(
    courseNo: string,
    teacherName: string,
    topicName: string,
    time: string
  ) {
    this.courseNo = courseNo;
    this.teacherName = teacherName;
    this.topicName = topicName;
    this.time = time;

    // broadcasting what is changed to all the observers
    this.notifyObservers();
  }
}

// Observers - observer change in Subject
class StudentDisplay implements Observer {
  private courseNo: string;
  private teacherName: string;
  private topicName: string;
  private time: string;

  update(
    courseNo: string,
    teacherName: string,
    topicName: string,
    time: string
  ) {
    this.courseNo = courseNo;
    this.teacherName = teacherName;
    this.topicName = topicName;
    this.time = formatTimeAndDate(time);

    this.display();
  }

  display() {
    console.log(`
    Student Display
    Course No : ${this.courseNo}
    Topic Name : ${this.topicName}
    Teacher : ${this.teacherName}
    Time: ${this.time}
    `);
  }
}

class TeacherDisplay implements Observer {
  private courseNo: string;
  private teacherName: string;
  private topicName: string;
  private time: string;

  update(
    courseNo: string,
    teacherName: string,
    topicName: string,
    time: string
  ) {
    this.courseNo = courseNo;
    this.teacherName = teacherName;
    this.topicName = topicName;
    this.time = time;

    this.display();
  }

  display() {
    console.log(`
    Teacher Display
    Course No : ${this.courseNo}
    Topic Name : ${this.topicName}
    Teacher: ${this.teacherName}
    Time: ${this.time}
    `);
  }
}

// Test case with data
const classData = new ClassData();

const s1 = new StudentDisplay();
classData.registerObservers(s1);

const s2 = new StudentDisplay();
classData.registerObservers(s2);

const t1 = new TeacherDisplay();
classData.registerObservers(t1);
classData.measureChanged(
  "SWE-4501",
  "Nazmul Haque",
  "Observer Design Pattern",
  "10.07.2021, 23:56"
);

// Time and date formatting  function
function formatTimeAndDate(td: string) {
  let dateObj: string = td.split(",")[0].trim();
  let timeObj: string = td.split(",")[1].trim();

  // Format 10/07/2021, 11:55 PM (12h format)
  dateObj = dateObj.replace(/[.]/g, "/");

  if (Number(timeObj.split(":")[0]) % 12 > 0) {
    const hourTime = Number(timeObj.split(":")[0]) % 12;
    const minuteTime = Number(timeObj.split(":")[1]);
    timeObj = `${hourTime}:${minuteTime}`;
  }
  const formattedData: string = `${dateObj}, ${timeObj}`;
  return formattedData;
}
