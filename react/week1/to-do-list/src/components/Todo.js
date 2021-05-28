import React from "react";

function Todo(props) {
  return (
    <ul>
      <li className="todo-work">
        <span>{props.item.id}</span>
        <span>{props.item.work}</span>
        <span>{props.item.bydate}</span>
      </li>
    </ul>
  );
}



export default Todo;
