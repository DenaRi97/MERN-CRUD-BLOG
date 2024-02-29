import express from "express";
import {createTodo, deleteTodo, getATodo, getTodo, updateTodo} from "../controllers/todoControllers.js";

const router = express.Router();

router.get("/", getTodo); //metodo get
router.get("/:id", getATodo); //metodo get único elemento
router.post("/", createTodo); //metodo post
router.put("/update/:id", updateTodo); //metodo actualizar
router.delete("/:id", deleteTodo); //metodo borrar

export default router; //si todo deriva de una unica constante, es mas facil hacerlo con un export default en vez de un export nombrado