
import * as enrollmentservis from "./enrollments.servise.js"
const EnrollmentCourse = async (req, res, next) => {
    const courseid = req.params.id;
    const userid = req.user.id;
    const enroll = await enrollmentservis.EnrollmentCourse(courseid, userid);
    return res.status(201).json({
        message: "create enrollment success",
        enroll
    })
}
const myCourses = async (req, res, next) => {
    const userid = req.user.id;
    const result = await enrollmentservis.myCourses(userid);
    return res.status(200).json(
        result
    )
}
const deleteEnrollment = async (req, res, next) => {
    const userId = req.user.id;
    const courseid = req.params.id;
    await enrollmentservis.deleteEnrollment(courseid, userId);
    return res.status(200).json({
        message: "Enrollment deleted successfully",
    });
}


export {
    EnrollmentCourse,
    myCourses,
    deleteEnrollment
}