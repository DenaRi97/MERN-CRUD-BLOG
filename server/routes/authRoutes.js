import express from "express";
import { Login, Register } from "../controllers/authController.js";

const router = express.Router() //Constante para exportar el router

//RUTAS DE MÉTODOS
//Pasamos la ruta que queremos y el controlador correspondiente
router.post("/register", Register)
router.post("/login", Login)

export default router;

//codifcar: los enviamos de un luar a otro sin exponerlo, perono estan seguros
//encriptar o llave publica/privada: genera un hash a traves de algoritmos pero se itera cada cierto tiempo con un algoritmo