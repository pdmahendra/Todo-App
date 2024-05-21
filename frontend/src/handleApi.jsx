import axios from 'axios';

const getTokenConfig = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};
// console.log(config);

const getAllTodos = (setTodos) => {
    axios.get('/api/getAllTodo', getTokenConfig())
        .then(response => {
            setTodos(response.data)
        })
        .catch(error => {
            console.error('Error fetching todos:', error.response ? error.response.data : error.message);
        });
};

const createTodo = (title, setTodos, setTitle) => {
    axios.post('/api/createTodo', { title: title }, getTokenConfig())
        .then(response => {
            setTodos(prevTodos => [...prevTodos, response.data.todo]);
            setTitle("");
        })
        .catch(error => {
            console.log(error);
        });
};

const updateTodo = (editingId, title, setTodos, setTitle, setEditingId) => {
    axios.put(`/api/updateTodo/${editingId}`, { title: title }, getTokenConfig())
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
    axios.put(`/api/updateTodo/${id}`, { completed: !completed }, getTokenConfig())
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
    axios.delete(`/api/deleteTodo/${id}`, getTokenConfig())
        .then(() => {
            setTodos(prevTodos => prevTodos.filter((todo) => todo._id !== id))
        })
        .catch(error => {
            console.log(error);
        });
};

const logout = () => {
    const config = getTokenConfig();
    axios.post('/api/logout', {}, config)// Optional server-side call
        .then(() => {
            localStorage.removeItem('token');
            localStorage.removeItem('userName'); // Remove the user's name
        })
        .catch(error => {
            console.error('Error logging out:', error);
        });
}

export { getAllTodos, createTodo, updateTodo, toggleTodoCompleted, deleteTodo, logout }