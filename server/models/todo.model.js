import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
    { //columnas de la tabla, tipo de datos
    title: {type: String, require: true},
    task: {type: String, require: true},
    type: {type: String, enum:["work", "school", "freetime"]},
    // createdAt: {type: Date.now()},
    // updateAt: {type: Date.now()}
}, {timestamp: true}

);

export const Todo = mongoose.model("tasks", todoSchema); //definir variable que vamos a usar en el controlador(Todo), que contiene el nombre de nuestra tabla(todoSchema) para que el controlador busque en ella