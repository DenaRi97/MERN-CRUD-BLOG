import express from 'express';
// para que permita imports > packagejson: type:modules > ya no hace falta const
// //const express = require('express');
import { connectDB } from './database/db.js'; //importe de la DB, especificar tipo de archivo
import todosRoutes from "./routes/routes.js"

const app = express(); //app escucha a express desde el import

//PUERTO
app.use(express.json());
app.listen(3000); //puerto en el que escucha
connectDB(); //Call the connectDB function to establish the connection


//RUTAS DE USO
app.use("/todos", todosRoutes); //ruta base