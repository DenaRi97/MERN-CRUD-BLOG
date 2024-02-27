import mongoose from "mongoose";
//Antes de la constante: abrir cdm en MongoDB > Server > 7.0 > bin ; mongod.exe para ejecutar servidor, no cerrar
//Despues en Compass

export const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todo_list"); //string from Atlas + /basededatos
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}