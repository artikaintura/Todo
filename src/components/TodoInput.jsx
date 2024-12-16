import React, { useState, useContext } from 'react'
import ToDoContext from '../context/ToDoContext'
function TodoInput() {

  const [input, setInput] = useState("")
  const { addTodo } = useContext(ToDoContext)
  const handleAddTodo = (e) => {
    e.preventDefault()
    addTodo(input)
    setInput("")
  }
  return (
    <div className='space-x-6'>
      <input className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500  max-w-xs"
       placeholder='Enter the user' type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button className='bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300' onClick={handleAddTodo}> Add User</button>
    </div>
  )
}

export default TodoInput
