import React, { memo } from 'react'
import { toggleTodoCompleted } from '../../handleApi.jsx'

const TodoListComponent = memo(({ title, completed, id, onDelete, edit, setTodos }) => {

    function handleDelete() {
        onDelete(id)
    }

    function handleEdit() {
        edit(id)
    }

    function toggleCompleted() {
        toggleTodoCompleted(id, completed, setTodos)
    }

    return (
        <li className="flex items-center justify-between py-1 border-b border-gray-200">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={toggleCompleted}
                    className="mr-2 form-checkbox h-4 w-4 text-blue-500"
                />
                <span className={completed ? 'line-through text-lg' : 'text-lg'}>{title}</span>
            </div>
            <div>
                <button onClick={handleEdit} className="ml-1 text-blue-500 text-xs">Edit</button>
                <button onClick={handleDelete} className="ml-1 text-red-500 text-xs">Delete</button>
            </div>
        </li>
    );

})

export default TodoListComponent;