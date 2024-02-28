import { Todo } from "../models/todo.model.js" //import del modelo


//CONTROLADOR METODO GET
export const getTodo = async(req, res) => {//parametros require & response
    try {
        const todos = await Todo.find();
        res.status(200).json(todos); //la respuesta es un status correcto si todo va bien, y lo devuelve en forma de json de nuestra const
        console.log(todos)
    } catch (error) {
        res.status(500).json({message: "todo mal", error})
    }
};

//CONTROLADOR METODO GET UNICO ELEMENTO
export const getATodo = async(req, res) => {
    const id = req.params.id
    try {
        const todos = await Todo.findById({_id:id});
        res.status(200).json(todos); 
        console.log(todos)
    } catch (error) {
        res.status(500).json({message: "todo mal", error})
    }
};

//CONTROLADOR METODO CREATE 
export const createTodo = async (req, res) => {
    const {title, task, type} = req.body; //cosas que va a buscar dentro del body del model
    try {
        const todo = new Todo ({ //new keys para guardar nueva iteracion
            title: title,
            task: task,
            type: type
        })
        await todo.save() //variable en la que se guardan
        res.status(200).json({message: "Todo joya", todo});
    } catch (error) {
        res.status(500).json({message: "todo mal", error});
    }
}

//CONTROLADOR METODO UPDATE
export const updateTodo = async (req, res) => {
    const id = req.params.id
    try {
        console.log(id)
        await Todo.updateOne({_id:id}, req.body);
        res.status(200).json({message: "Todo correcto"});
    
    } catch (error) {
        res.status(500).json({message: "todo mal", error})
    }
}

//CONTROLADOR METODO DELETE
export const deleteTodo = async (req, res) => {
    const id = req.params.id
    try {
        console.log(id)
        await Todo.deleteOne({_id:id}, req.body);
        res.status(200).json({message: "Todo correcto"});
    
    } catch (error) {
        res.status(500).json({message: "todo mal", error})
    }
}

