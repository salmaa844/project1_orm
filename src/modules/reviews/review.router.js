
import { Router } from "express";
import authenticateJWT from "../../middlewares/authMiddleware.js";
import ROLES from "../../../database/roles.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./review.controller.js";

const router = Router();

router.post("/courses/:id",authenticateJWT([ROLES.STUDENT]),asyncHandler(controller.createReview));
router.get("/courses/:id",asyncHandler(controller.getReviewByCourse))
router.delete("/:id",asyncHandler(controller.deleteReview))
export default router;