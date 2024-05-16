import { Router } from "express";
const router = Router()

import {
    createTodo,
    getAllTodo,
    updateTodo,
    deleteTodo
} from "../controllers/todo.controller.js";

router.route('/createTodo').post(createTodo)
router.route('/getAllTodo').get(getAllTodo)
router.route('/updateTodo/:id').put(updateTodo)
router.route('/deleteTodo/:id').delete(deleteTodo)

export default router