import React, { useState } from "react";

const Todo = ({ todo, deleteTodo }) => {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <span className={status ? "todo-strike" : ""}>{todo.description}</span>
      <input
        type="checkbox"
        value={todo.id}
        onChange={(e) => setStatus(e.target.checked)}
      />
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
