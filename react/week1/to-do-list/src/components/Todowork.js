import React from "react";
import Todo from "./Todo";

function Todowork() {
  const todoWorkArray = [
    { id: 1, work: "Search for job", bydate: "Thu May 20 2021" },
    { id: 2, work: "Send CV", bydate: "Sun June 20 2021" },
    { id: 3, work: "Follow up", bydate: "Mon July 05 2021" },
  ];
  const todoWork = todoWorkArray.map((todo) => (
    <Todo key={todo.id} item={todo} />
  ));
  return <div>{todoWork}</div>;
}

export default Todowork;
