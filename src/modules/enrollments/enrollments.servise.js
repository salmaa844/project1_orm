import Apperror from "../../utils/Apperror.js";
import * as enrollmentQuery from "./enrollments.data.js"

const EnrollmentCourse = async (courseid, userid) => {

    const ExistingEnrollment = await enrollmentQuery.findEnrollment(courseid, userid);
    if (ExistingEnrollment) throw new Apperror("you are already enrollment in this course")
    const enroll = await enrollmentQuery.EnrollmentCourse(courseid, userid);
    return enroll;
}

const myCourses = async (userid) => {

    const enroll = await enrollmentQuery.findmyCourses(userid);
    return enroll;

}
const deleteEnrollment = async (courseId, userId) => {
    console.log(userId + "" + courseId)
    const existingEnroll = await enrollmentQuery.findEnrollment(courseId, userId);
    if (!existingEnroll) {
        throw new Apperror("Enrollment not found", 404);
    }
    await enrollmentQuery.deleteEnrollment(courseId, userId);
    return true;
};
export {
    EnrollmentCourse,
    myCourses,
    deleteEnrollment
}