import Review from "../../../database/models/review.model.js";
const findReviewById = async (id) => {
  return await Review.findByPk(id);
}
const findReviewCourse = async ({ courseid, userid }) => {
  return await Review.findOne({
    where: {
      course_id: courseid,
      user_id: userid
    }
  });
};
const createComment = async ({ courseid, userid, comment }) => {
  return await Review.create({
    course_id: courseid,
    user_id: userid,
    comment
  });
};
const getReview = async (courseid) => {

  return await Review.findAll({
    where: {
      "course_id": courseid
    },

  })
}
const deleteReview = async (review) => {
  return await review.destroy()
}
export {
  findReviewCourse,
  createComment,
  getReview,
  deleteReview,
  findReviewById
};
