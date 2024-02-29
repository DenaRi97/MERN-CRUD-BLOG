import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    email: {type: String, require: true},
    role: {type: String, default: "user", enum: ["user", "admin"], require: true} //default hace el nuevo item, por defecto, un "user", y luego enumera los otros valores que hay, en este caso user y admin
})


export const User = mongoose.model("users", authSchema)  //definir variable que vamos a usar en el controlador(User), que contiene el nombre de nuestra tabla(users) y el modelo que acabamos de crear (authSchema)