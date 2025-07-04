import Apperror from "../../utils/Apperror.js";
import { findUserByEmail } from "../auth/auth.data.js";
import * as courseQuery from "./course.data.js"
import Joi from "joi";
const createCourseSchema = Joi.object({
    title: Joi.string().min(3).required(),
    describtion: Joi.string().optional(),
    price: Joi.number().min(0).positive().required()
});
export const createCourse = async (data) => {

    const { error } = createCourseSchema.validate(data, {
        abortEarly: false,
        errors: {
            wrap: {
                label: ""
            }
        }
    });
    if(error){
        const formattedError = error.details.map((detail)=>({
            field: detail.path.join("."),
            message:detail.message

        }))
        return formattedError;
    }
    const course = await courseQuery.createCourse(data);
    return course;

}

export const getAllCourse = async (order, limit, offset) => {

    const course = await courseQuery.getAllCourse(order, limit, offset);
    if (course.count === 0) {
        return { message: "there is no courses found" }

    }
    return course;
}

export const getCourse = async (id) => {

    const course = await courseQuery.getCourseById(id);
    if (!course) throw new Apperror("course not found", 404)
    return course;
}

export const updataCourse = async (data, id) => {
    const existcourse = await courseQuery.getCourseById(id);
    if (!existcourse) {
        throw new Apperror("COURSE NOT FOUND", 404);
    }
    const course = await courseQuery.updataCourse(data, id);

    return course;


}
export const deleteCourse = async (id) => {
    const existcourse = await courseQuery.getCourseById(id);
    if (!existcourse) {
        throw new Apperror("COURSE NOT FOUND", 404);
    }
    const course = await courseQuery.deleteCourse(existcourse);

    return true;
}

export const softDeleteCourse = async (id) => {
    const existcourse = await courseQuery.getCourseById(id);
    if (!existcourse) {
        throw new Apperror("COURSE NOT FOUND", 404);
    }

    const course = await courseQuery.softDeleteCourse(id);

    return true;
}