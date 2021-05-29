import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  const newInput = (e) => {
    setUserInput(e.target.value);
  };

  const addTask = (e) => {
    addTodo(userInput);
    setUserInput("");
  };
  return (
    <div>
      <input
        value={userInput}
        type="text"
        onChange={newInput}
        placeholder="Enter new todo task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTodo;
