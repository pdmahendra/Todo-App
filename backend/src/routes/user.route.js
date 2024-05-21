import { Router } from "express";
const router = Router()

import { signUp, login, logout } from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

router.route('/signup').post(signUp)
router.route('/login').post(login)
router.route('/logout').post(verifyJwt, logout)

export default router