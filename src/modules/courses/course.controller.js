import { getPagination, getPaginationData } from "../../utils/pagination/pagination.js";
import buildOrderArray from "../../utils/sorting/sortQuery.js";
import * as courseServir from "./course.service.js"
export const createCourse = async (req, res, next) => {
    const course = await courseServir.createCourse(req.body);
    return res.status(201).json({
        message: "add course successfuly",
        course
    })
}

export const getAllCourse = async (req, res, next) => {
    const { limit, page, offset } = getPagination(req);
    const allowedCoulmns = ["price"]
    const order = buildOrderArray(req.query.sortBy, req.query.order, allowedCoulmns);
    const data = await courseServir.getAllCourse(order, limit, offset);
    if (data.message) {
        return res.status(200).json(data)
    } else {
        const response = getPaginationData(data, page, limit);
        return res.status(200).json({
            response
        })
    }

}

export const getCourse = async (req, res, next) => {
    const { id } = req.params;
    const course = await courseServir.getCourse(id);
    return res.status(200).json({
        course
    })
}
export const updataCourse = async (req, res, next) => {
    const { id } = req.params;
    const course = req.body;
    const result = await courseServir.updataCourse(course, id);
    return res.status(200).json({
        message: "updated success",
        result
    })
}
export const deleteCourse = async (req, res, next) => {
    const { id } = req.params;
    const result = await courseServir.deleteCourse(id);
    return res.status(200).json({
        message: "deleted successful",
        result
    })

}
export const softDeleteCourse = async (req, res) => {
    const { id } = req.params;
    const result = await courseServir.softDeleteCourse(id);
    return res.status(200).json({
        message: "soft deleted successful",
        result
    })


}