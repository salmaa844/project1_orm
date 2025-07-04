
import { Router } from "express";
import * as controller from "./enrollments.controller.js"
import authenticateJWT from "../../middlewares/authMiddleware.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ROLES from "../../../database/roles.js";

const router = Router();


router.post("/course/:id/enroll", authenticateJWT([ROLES.ADMIN, ROLES.STUDENT]), asyncHandler(controller.EnrollmentCourse));
router.delete("/course/:id", authenticateJWT([ROLES.ADMIN, ROLES.STUDENT]), asyncHandler(controller.deleteEnrollment));
router.get("/course/my_courses", authenticateJWT([ROLES.ADMIN, ROLES.STUDENT]), asyncHandler(controller.myCourses));

export default router;