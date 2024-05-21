import { Router } from "express";
const router = Router()

import {
    createTodo,
    getAllTodo,
    updateTodo,
    deleteTodo
} from "../controllers/todo.controller.js";


import { verifyJwt } from "../middlewares/auth.middleware.js";

router.route('/createTodo').post(verifyJwt,createTodo)
router.route('/getAllTodo').get(verifyJwt,getAllTodo)
router.route('/updateTodo/:id').put(updateTodo)
router.route('/deleteTodo/:id').delete(deleteTodo)

export default router