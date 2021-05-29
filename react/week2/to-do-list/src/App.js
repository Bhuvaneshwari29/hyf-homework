import React, { useState } from "react";
import "./App.css";
import data from "./Components/data.json";
import Header from "./Components/Header.js";
import Timer from "./Components/Timer.js";
import TodoList from "./Components/TodoList.js";
import AddTodo from "./Components/AddTodo.js";

function App() {
  const [todoList, assignTodoList] = useState(data);
  const addTodo = (userInput) => {
    assignTodoList([
      ...todoList,
      {
        id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
        description: userInput,
      },
    ]);
  };

  const deleteTodo = (id) => {
    const deletedList = todoList.filter((todoTask) => todoTask.id !== id);
    assignTodoList(deletedList);
  };

  return (
    <div className="container">
      <Header />
      <Timer />
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        "No more Items"
      )}
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
