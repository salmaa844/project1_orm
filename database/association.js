import User from "./models/user.model.js";
import Course from "./models/course.model.js";
import Review from "./models/review.model.js";
import Enrollment from "./models/enrollment.model.js"


User.belongsToMany(Course, { through: Enrollment, foreignKey: "user_id" });
Course.belongsToMany(User, { through: Enrollment, foreignKey: "course_id" });

Enrollment.belongsTo(Course,{foreignKey:"course_id",as :"DetailOfCourse"});

Enrollment.belongsTo(User,{foreignKey:"user_id"})

User.hasMany(Review, { foreignKey: "user_id" });
Review.belongsTo(User, { foreignKey: "user_id" });

Course.hasMany(Review, { foreignKey: "course_id" });
Review.belongsTo(Course, { foreignKey: "course_id" });
