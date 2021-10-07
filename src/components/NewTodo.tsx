import React from "react";
import "./style.css";

function NewTodo() {
  return (
    <div className="form-container">
      <input
        className="todo-input"
        type="text"
        placeholder="Type your new todo here!"
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
}

export default NewTodo;
