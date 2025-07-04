import Apperror from "../../utils/Apperror.js"
import * as queryReview from "./review.data.js"
import {findEnrollment} from "./../enrollments/enrollments.data.js"
const createReview = async ({ courseid, userid, comment }) => {
  console.log("courseid:", courseid);
  console.log("userid:", userid);
  console.log("comment:", comment);

  const enrolled = await findEnrollment(courseid, userid );
  if (!enrolled) throw new Apperror("You must be enrolled in the course to make a review", 403);

  const existcomment = await queryReview.findReviewCourse({ courseid, userid });
  if (existcomment) throw new Apperror("You already have a comment", 400);

  return await queryReview.createComment({ courseid, userid, comment });
};

const getReviewByCourse = async(courseid)=>{
  return await queryReview.getReview(courseid);
}
const deleteReview = async(courseid) =>{
    const existReview = await queryReview.findReviewById(courseid);
    if(!existReview)throw new Apperror("not found any review from to courses",400)
    return await queryReview.deleteReview(existReview);
}

export {
    createReview,
    getReviewByCourse,
    deleteReview
}