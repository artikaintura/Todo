import React, { useState } from 'react'
import ToDoContext from './ToDoContext';
function ToDoProvider({ children }) {

    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (!text) return null

        const todo = {
            todoText: text,
            isCompleted: false,
            id: Date.now()
        }

        setTodos((prev) => {
            return [
                ...prev, todo
            ];
        })
    }
    const updateTodo = (id, newText) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, todoText: newText }
                    : todo
            )
        );

    }
    const deleteTodo = (id) => {
        setTodos(prev => {
            if (id) {
                return prev.filter((item) => item?.id !== id);
            }
            return prev;

        });
    };
    return (
        <>
            <div>
                <ToDoContext.Provider value={{ addTodo, todos, deleteTodo, updateTodo }}>
                    {children}
                </ToDoContext.Provider>
            </div>

        </>
    )
}

export default ToDoProvider;
