// create course for online and offline course
class Course {
}
class JavaOfflineCourse extends Course {
    createCourseContent() {
        console.log("Java Offline Course Content");
    }
    createCourseMaterial() {
        console.log("Java Offline Course Material");
    }
    createCourseSchedule() {
        console.log("Java Offline Course Schedule");
    }
}
class PythonOfflineCourse extends Course {
    createCourseContent() {
        console.log("Python Offline Course Content");
    }
    createCourseMaterial() {
        console.log("Python Offline Course Material");
    }
    createCourseSchedule() {
        console.log("Python Offline Course Schedule");
    }
}
class JavaOnlineCourse extends Course {
    createCourseContent() {
        console.log("Java Online Course Content");
    }
    createCourseMaterial() {
        console.log("Java Online Course Material");
    }
    createCourseSchedule() {
        console.log("Java Online Course Schedule");
    }
}
class PythonOnlineCourse extends Course {
    createCourseContent() {
        console.log("Python Online Course Content");
    }
    createCourseMaterial() {
        console.log("Python Online Course Material");
    }
    createCourseSchedule() {
        console.log("Python Online Course Schedule");
    }
}
class CourseFactory {
    createCourse(courseName) {
        const course = this.getCourse(courseName);
        course.createCourseContent();
        course.createCourseMaterial();
        course.createCourseSchedule();
        return course;
    }
}
class OnlineCourseFactory extends CourseFactory {
    getCourse(course) {
        if (course === "OnJava")
            return new JavaOnlineCourse();
        if (course === "OnPython")
            return new PythonOnlineCourse();
        else
            return null;
    }
}
class OfflineCourseFactory extends CourseFactory {
    getCourse(course) {
        if (course === "OffJava")
            return new JavaOfflineCourse();
        if (course === "OffPython")
            return new PythonOfflineCourse();
        else
            return null;
    }
}
const cf = new OnlineCourseFactory();
cf.createCourse("OnJava");
const ocf = new OfflineCourseFactory();
ocf.createCourse("OffPython");
