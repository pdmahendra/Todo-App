import Todo from "../models/todo.model.js";

const createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const todo = await Todo.create({
            title
        });
        return res.status(201).json({ message: "Todo created successfully", todo })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;

        const todo = await Todo.findByIdAndUpdate(id, {
            title,
            completed
        }, { new: true });
        if (!todo) {
            return res.status(404).json("Todo with this ID does not exist");
        }
        return res.status(200).json({ message: "todo updated successfully", todo })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id)
        if (!todo) {
            return res.status(404).json("Todo with this ID does not exist");
        }
        return res.status(200).json({ message: "todo deleted successfully" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export { createTodo, getAllTodo, updateTodo, deleteTodo }