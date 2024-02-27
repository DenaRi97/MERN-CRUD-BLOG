import express from "express";
import {createTodo, getTodo} from "../controllers/todo.controllers.js";

const router = express.Router();

router.get("/", getTodo); //metodo get
router.post("/", createTodo); //metodo post

export default router; //si todo deriva de una unica constante, es mas facil hacerlo con un export default en vez de un export nombrado