import Course from "../../../database/models/course.model.js";
import User from "../../../database/models/user.model.js";
import Enrollment from "./../../../database/models/enrollment.model.js"


const findEnrollment = async (courseId, userId) => {
    return await Enrollment.findOne({
        where: {
            course_id: courseId,
            user_id: userId
        }
    });
};

const findmyCourses = async (userId) => {
    return await Enrollment.findAll({
        where:
        {
            user_id: userId
        },
        // one way
        // include: [{

        //     model:Course,
        //     attributes:["title","price"]
        // } ,{

        //     model:User,
        //     attributes:["name","email"]
        // }]
        //two way
        include: ["DetailOfCourse"]
        , attributes: []

    });

}
const EnrollmentCourse = async (courseid, userid) => {
    return await Enrollment.create({ course_id: courseid, user_id: userid });
}
const deleteEnrollment = async (courseId, userId) => {
    await Enrollment.destroy({
        where: {
            course_id: courseId,
            user_id: userId
        }

    });
    return true;
}
export {
    findEnrollment,
    findmyCourses,
    EnrollmentCourse,
    deleteEnrollment
}