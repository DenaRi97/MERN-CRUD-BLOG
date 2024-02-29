import mongoose from "mongoose";
//Antes de la constante: abrir cdm en MongoDB > Server > 7.0 > bin ; mongod.exe para ejecutar servidor, no cerrar
//Despues en Compass

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/CRUD"); //string from Atlas + /basededatos
        console.log("Connected")
    } catch (error) {
        console.log("Problemitas", error)
    }
}