
import { Router } from "express";
import authenticateJWT from "../../middlewares/authMiddleware.js";
import ROLES from "../../../database/roles.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./user.controller.js";

const router = Router();

router.get("/users", authenticateJWT([ROLES.ADMIN]), asyncHandler(controller.getAllUsers));
router.get("/users/:id", authenticateJWT([ROLES.ADMIN, ROLES.USER]), asyncHandler(controller.getUserById));
router.delete("/users/:id", authenticateJWT([ROLES.ADMIN]), asyncHandler(controller.deleteUser));

export default router;