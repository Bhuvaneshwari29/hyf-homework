import React from "react";

function Todo(props) {
  return (
    < >
      <li className="todo-work">
        <span>{props.item.id}</span>
        <span>{props.item.work}</span>
        <span>{props.item.bydate}</span>
      </li>
    </>
  );
}



export default Todo;
