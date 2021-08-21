// create course for online and offline course
abstract class Course {
  private name: string;
  private duration: number;

  abstract createCourseContent(): void;
  abstract createCourseMaterial(): void;
  abstract createCourseSchedule(): void;
}

class JavaOfflineCourse extends Course {
  createCourseContent(): void {
    console.log("Java Offline Course Content");
  }
  createCourseMaterial(): void {
    console.log("Java Offline Course Material");
  }
  createCourseSchedule(): void {
    console.log("Java Offline Course Schedule");
  }
}
class PythonOfflineCourse extends Course {
  createCourseContent(): void {
    console.log("Python Offline Course Content");
  }
  createCourseMaterial(): void {
    console.log("Python Offline Course Material");
  }
  createCourseSchedule(): void {
    console.log("Python Offline Course Schedule");
  }
}
class JavaOnlineCourse extends Course {
  createCourseContent(): void {
    console.log("Java Online Course Content");
  }
  createCourseMaterial(): void {
    console.log("Java Online Course Material");
  }
  createCourseSchedule(): void {
    console.log("Java Online Course Schedule");
  }
}
class PythonOnlineCourse extends Course {
  createCourseContent(): void {
    console.log("Python Online Course Content");
  }
  createCourseMaterial(): void {
    console.log("Python Online Course Material");
  }
  createCourseSchedule(): void {
    console.log("Python Online Course Schedule");
  }
}

abstract class CourseFactory {
  protected abstract getCourse(course: string): Course;

  createCourse(courseName: string): Course {
    const course: Course = this.getCourse(courseName);
    course.createCourseContent();
    course.createCourseMaterial();
    course.createCourseSchedule();

    return course;
  }
}

class OnlineCourseFactory extends CourseFactory {
  protected getCourse(course: string): Course {
    if (course === "OnJava") return new JavaOnlineCourse();
    if (course === "OnPython") return new PythonOnlineCourse();
    else return null;
  }
}
class OfflineCourseFactory extends CourseFactory {
  protected getCourse(course: string): Course {
    if (course === "OffJava") return new JavaOfflineCourse();
    if (course === "OffPython") return new PythonOfflineCourse();
    else return null;
  }
}

const cf: CourseFactory = new OnlineCourseFactory();
cf.createCourse("OnJava");
const ocf: CourseFactory = new OfflineCourseFactory();
ocf.createCourse("OffPython");
