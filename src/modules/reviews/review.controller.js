
import * as reviewservise from "./review.servise.js"
const createReview = async (req, res, next) => {

    const { comment } = req.body;
    const courseid = req.params.id;
    const userid = req.user.id;
    const result = await reviewservise.createReview({ courseid, userid, comment });
    return res.status(201).json({
        message: "add review success",
        result
    });

}
const getReviewByCourse = async (req, res, next) => {
    const courseid = req.params.id;
    const result = await reviewservise.getReviewByCourse(courseid);
    return res.status(200).json({
        result
    })
}
const deleteReview = async (req, res, next) => {
    const courseid = req.params.id;
    const result = await reviewservise.deleteReview(courseid);
    return res.status(200).json({
       message:"deleted success"
    })
}
export {
    createReview,
    getReviewByCourse,
    deleteReview
}