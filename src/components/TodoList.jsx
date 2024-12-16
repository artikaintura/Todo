import React, { useContext } from 'react'
import ToDoContext from '../context/ToDoContext'
function TodoList() {
    const { todos, deleteTodo, updateTodo } = useContext(ToDoContext)
    return (
        <div className="text-center justify-center pt-2 mt-5 pb-4">
            {
                todos?.map((todo) =>
                    <div key={todo.id}>
                        <div className='flex space-x-4 mt-4 items-center justify-center'>
                            <p className="text-black mr-8">{todo.todoText}</p>
                            <button className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                onClick={() => {
                                    const newText = prompt("Enter the new text:", todo.todoText);
                                    if (newText) updateTodo(todo.id, newText);
                                }}>Update</button>
                            <button className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                onClick={() => deleteTodo(todo.id)}>Delete</button>



                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default TodoList
