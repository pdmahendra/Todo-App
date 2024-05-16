import axios from 'axios';


const getAllTodos = (setTodos) => {
    axios.get('/api/getAllTodo')
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => {
            console.log(error);
        });
};

const createTodo = (title, setTodos, setTitle) => {
    axios.post('/api/createTodo', { title: title })
        .then(response => {
            setTodos(prevTodos => [...prevTodos, response.data.todo]);
            setTitle("");
        })
        .catch(error => {
            console.log(error);
        });
};

const updateTodo = (editingId, title, setTodos, setTitle, setEditingId) => {
    axios.put(`/api/updateTodo/${editingId}`, { title: title })
        .then(response => {
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo._id === editingId ? { ...todo, title: response.data.todo.title } : todo
                )
            );
            setTitle("");
            setEditingId(null);
        })
        .catch(error => {
            console.log(error);
        });
};

const toggleTodoCompleted = (id, completed, setTodos) => {
    axios.put(`/api/updateTodo/${id}`, { completed: !completed })
        .then(response => {
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo._id === id ? { ...todo, completed: !completed } : todo
                )
            );
        })
        .catch(error => {
            console.log(error);
        });
};

const deleteTodo = (id, setTodos) => {
    axios.delete(`/api/deleteTodo/${id}`)
        .then(() => {
            setTodos(prevTodos => prevTodos.filter((todo) => todo._id !== id))
        })
        .catch(error => {
            console.log(error);
        });
};

export { getAllTodos, createTodo, updateTodo, toggleTodoCompleted, deleteTodo }