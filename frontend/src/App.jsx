import React from 'react'
import { useCallback, useState, memo, useEffect } from 'react'
import './App.css'
import TodoListComponent from './components/TodoListComponent.jsx'
import { getAllTodos, createTodo, updateTodo, deleteTodo } from './handleApi.jsx'

function App() {
  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState([])
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    getAllTodos(setTodos)
  }, [])

  const addTodo = () => {
    if (title.trim() !== "") {
      if (editingId !== null) {
        updateTodo(editingId, title, setTodos, setTitle, setEditingId)
      } else {
        createTodo(title, setTodos, setTitle)
      }
    }
  }

  const edit = (id => {
    const todo = todos.find(todo => todo._id === id);
    if (todo) {
      setTitle(todo.title);
      setEditingId(id);
    }
  })

  const onDelete = useCallback((id) => {
    deleteTodo(id, setTodos)
  }, [])


  return (
    <div className="p-4">
      <input
        type="text"
        value={title}
        placeholder="Add Todo Here"
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo();
          }
        }}
        className="p-2 border border-gray-300 rounded w-80 mr-2"
      />

      <button onClick={addTodo} className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
        {editingId !== null ? "Update" : "Adddd"} Todo
      </button>

      <ul className="mt-4">
        {todos.map((todo) => (
          <TodoListComponent
            key={todo._id}
            title={todo.title}
            completed={todo.completed}
            id={todo._id}
            onDelete={onDelete}
            edit={edit}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default App
