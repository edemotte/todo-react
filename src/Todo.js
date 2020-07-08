import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="todo">
      <h2>{props.title}</h2>
    </div>
  );
};

export default Todo;
