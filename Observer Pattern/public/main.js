// subject - whom we observe for any change
class ClassData {
    constructor() {
        // all the observers subscribe to this Subject
        this.observers = [];
    }
    registerObservers(o) {
        this.observers.push(o);
    }
    removeObservers(o) {
        const index = this.observers.indexOf(o);
        this.observers = this.observers.splice(index, 1);
    }
    notifyObservers() {
        this.observers.forEach((o) => o.update(this.courseNo, this.teacherName, this.topicName, this.time));
    }
    // measuring what has been changed
    measureChanged(courseNo, teacherName, topicName, time) {
        this.courseNo = courseNo;
        this.teacherName = teacherName;
        this.topicName = topicName;
        this.time = time;
        // broadcasting what is changed to all the observers
        this.notifyObservers();
    }
}
// Observers - observer change in Subject
class StudentDisplay {
    update(courseNo, teacherName, topicName, time) {
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
class TeacherDisplay {
    update(courseNo, teacherName, topicName, time) {
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
classData.measureChanged("SWE-4501", "Nazmul Haque", "Observer Design Pattern", "10.07.2021, 23:56");
// Time and date formatting  function
function formatTimeAndDate(td) {
    let dateObj = td.split(",")[0].trim();
    let timeObj = td.split(",")[1].trim();
    // Format 10/07/2021, 11:55 PM (12h format)
    dateObj = dateObj.replace(/[.]/g, "/");
    if (Number(timeObj.split(":")[0]) % 12 > 0) {
        const hourTime = Number(timeObj.split(":")[0]) % 12;
        const minuteTime = Number(timeObj.split(":")[1]);
        timeObj = `${hourTime}:${minuteTime}`;
    }
    const formattedData = `${dateObj}, ${timeObj}`;
    return formattedData;
}
export {};
