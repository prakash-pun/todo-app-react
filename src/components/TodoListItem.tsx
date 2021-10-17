import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";

type Props = {
  todo: ITodo;
};

const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <div className="todo-content">
        <input className="todo-content-box" type="checkbox" />
        <h3 className="todo-content-title">{todo.text}</h3>
      </div>
      <div className="remove-content">
        <button className="remove-button">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
