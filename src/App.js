import React from "react";
import "./App.css";
import ToDoProvider from "./context/ToDoProvider";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="flex justify-center items-center"
        style={{
          backgroundImage: 'url("assets/images/bg1.jpg")',
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="p-6 rounded-lg shadow-2xl max-w-md w-full text-center justify-center">
          <h1 className="text-3xl font-semibold text-center text-sky-700 mb-4">
            {" "}
            ToDo List
          </h1>
          <ToDoProvider>
            <TodoInput />
            <TodoList />
          </ToDoProvider>
        </div>
      </div>
    </>
  );
}

export default App;
