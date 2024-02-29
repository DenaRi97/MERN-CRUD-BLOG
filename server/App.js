import express from 'express';
// para que permita imports > packagejson: type:modules > ya no hace falta const
// //const express = require('express');
import { connectDB } from './database/db.js'; //importe de la DB, especificar tipo de archivo
import todosRoutes from "./routes/todoRoutes.js"
import authRoutes from "./routes/authRoutes.js"

const app = express(); //app escucha a express desde el import

//RUTAS DE USO
app.use(express.json());
app.use("/todos", todosRoutes); //ruta base del ToDo
app.use("/auth", authRoutes); //ruta base de autentificacion

//PUERTO
app.listen(3000, console.log("Se conecto al servidor")); //puerto en el que escucha

connectDB(); //Call the connectDB function to establish the connection

// db() //db del login