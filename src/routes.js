import globalErrorHandler from './middlewares/globalErrorHandler.js';
import authrouter from "./modules/auth/auth.router.js";
import courserouter from "./modules/courses/course.router.js"
import enrollmentrouter from "./modules/enrollments/enrollments.router.js"
import reviewrouter from "./modules/reviews/review.router.js"
import userrouter from "./modules/users/user.router.js"
export function init(express ,app){

    app.use(express.json());

    app.use("/auth",authrouter);
    app.use("/course",courserouter);
    app.use("/enrollments",enrollmentrouter);
    app.use("/review",reviewrouter);
    app.use("/user",userrouter)


    app.use(globalErrorHandler);
}