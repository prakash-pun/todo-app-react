import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";

type Props = {
  todo: any;
  removeTodo: (todo: ITodo) => void;
  onCompletedPressed: (todo: ITodo) => void;
};

const TodoListItem: React.FC<Props> = ({
  todo,
  removeTodo,
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
            onClick={() => onCompletedPressed(todo)}
          />
        )}

        <h3 className="todo-content-title">{todo.text}</h3>
      </div>
      <div className="remove-content">
        <button className="remove-button" onClick={() => removeTodo(todo)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
