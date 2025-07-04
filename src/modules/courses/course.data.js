import { where } from "sequelize";
import Course from "../../../database/models/course.model.js"
import Review from "../../../database/models/review.model.js";


export const createCourse = async (data) => {
    const course = await Course.create(data);
    return course;
}
export const getAllCourse = async (order,limit,offset) => {
    const course = await Course.findAndCountAll({
        where: { isDeleted: false }
        , include: [{
            model: Review,
            attributes: ["comment"]
        }], attributes: ["title", "price", "describtion"],
        order
       
    });
    return course;
}

export const getCourseById = async (id) => {
    const course = await Course.findOne({
        where: { isDeleted: false, id },
        include:[{
            model: Review,
            attributes: ["comment"]
        }],
        attributes: ["title", "price", "describtion"]
    });
    return course;
};

export const updataCourse = async (data, id) => {
    await Course.update(data, {
        where: { id }
    });

    return "true";
};

export const deleteCourse = async (course) => {
    await course.destroy();
    return true;
};
export const softDeleteCourse = async (id) => {
    await Course.update(
        { isDeleted: true },
        {
            where: { id }
        }
    );
};
