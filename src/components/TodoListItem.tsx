import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";

type Props = {
  todo: any;
  onRemovePressed: (id: string) => void;
  onCompletedPressed: (id: string) => void;
};

const TodoListItem: React.FC<Props> = ({
  todo,
  onRemovePressed,
  onCompletedPressed,
}) => {
  return (
    <div className="todo-item-container">
      <div className="todo-content">
        {todo.isCompleted ? (
          <input className="todo-content-box" type="checkbox" defaultChecked />
        ) : (
          <input
            className="todo-content-box"
            type="checkbox"
            onClick={() => onCompletedPressed(todo._id)}
          />
        )}

        <h3 className="todo-content-title">{todo.text}</h3>
      </div>
      <div className="remove-content">
        <button
          className="remove-button"
          onClick={() => onRemovePressed(todo._id)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
