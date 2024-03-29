import { User } from "../models/authModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


//codifcar: los enviamos de un luar a otro sin exponerlo, perono estan seguros
//encriptar o llave publica/privada: generqa un hash a traves de algoritmos pero se itera cada cierto tiempo con un algoritmo


//CONTROLADOR REGISTROS
export const Register = async (req, res) => {
    const {username, password, email,} = req.body; //esta es la informacion que va a buscar la api, la metemos toda en una constante y usamos el req.body para que las coja todas
    // console.log(username)
    try {
        const existingEmail = await User.findOne({email:email}) //finOne/findAll/etc, metodos del mongoose
        if (existingEmail) {
            return res.status(400).json({message: "This email already exist"}) //400 error/status de base de datos
        }
        //constante para encriptar la contraseña, puede llamerse de otra manera, pero es mas facil de identificar ya que se llama igual que de método
        //preferible declararla despues de declarar lla contraseña (linea 4)
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        // console.log(hashPassword)

        //Si no existe creamos uno nuevo
        const credentials = new User ({ //esta variable tiene que ser la misma que se llama luego al save
            //estos datos, de la const de arriba, ya cuando se mete le ha dicho en la const, anterior que req.body, asi que no  hace falta repetirlo, pero si no esta la const de arriba, hay que indicar el req.body en cada una de estas
            username: username,
            password: hashPassword,
            email: email
        })
        await credentials.save() //Guardar los datos
        res.status(200).json({message: "Register successfull", credentials})
    } catch (error) {
        res.status(500).json({message: "Could not create a new register", error})
    }
}

//CONTROLADOR LOGIN
export const Login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email:email}) //buscamos si el email existe
        if (!user) { //el ! lo pone al significado contrario, es decir, si el mail no esta en nuestra base
            return res.status(400).json({message: "Invalid email"})
        } else{
            const validPassword = await bcrypt.compare(password, user.password) //verificamos si la password coincide
            if (!validPassword) { //si las claves no coinciden ...
                return res.status(400).json({message: "Invalid password"}) //...enviamos error
            };
        }
        //Tras el loginse genera un token
        const tokenLog = jwt.sign({ //firmo y elijo la info que quiero enviar con el token
            email: email,
            role: user.role,
        }, "codesecret" ) //clave secreta, firma el token, se usa luego con el middleware para verificar, esta en sucio

        //Guardo la clave en un header que llamo tokenAuth y le paso la constante del token (tokenLog)
        await res.header ({ "tokenAuth": tokenLog})
        res.status(200).json({message: "Login successfull", tokenLog})
        
    } catch (error) {
        res.status(500).json({message: "Could not log in", error})
    }
}