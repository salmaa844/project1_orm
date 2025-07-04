import { Router } from "express";
import * as controller from "./auth.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";

const router = Router();

router.post('/register',asyncHandler(controller.register));
router.post('/login',asyncHandler(controller.login));
router.post('/confirm_email',asyncHandler(controller.confirmEmail))


export default router;


