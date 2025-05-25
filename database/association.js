import User from "./models/user.model.js";
import Course from "./models/course.model.js";
import Review from "./models/review.model.js";
import Enrollment from "./models/enrollment.model.js";

User.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(User, { through: Enrollment });


User.hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });

Course.hasMany(Review, { foreignKey: "course_id" });
Review.belongsTo(Course, { foreignKey: "course_id" });
