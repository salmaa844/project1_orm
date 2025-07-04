import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./course.controller.js"
import authenticatJWT from "../../middlewares/authMiddleware.js";
import ROLES from "../../../database/roles.js";


const router = Router();

router.post("/",authenticatJWT([ROLES.ADMIN]),asyncHandler(controller.createCourse));
router.get("/",asyncHandler(controller.getAllCourse));
router.get("/:id",asyncHandler(controller.getCourse));

router.patch("/:id",authenticatJWT([ROLES.ADMIN]),asyncHandler(controller.updataCourse));
router.patch("/soft/:id",authenticatJWT([ROLES.ADMIN]),asyncHandler(controller.softDeleteCourse));

router.delete("/:id",authenticatJWT([ROLES.ADMIN]),asyncHandler(controller.deleteCourse));

export default router;

