import React from "react";
import "./style.css";

type Props = {
  todo: ITodo;
};

const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <p>Created at: &nbsp; {new Date(todo.createdAt).toLocaleDateString()}</p>
      <div className="todo-button-container">
        <button className="completed-button">Mark As Completed</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
