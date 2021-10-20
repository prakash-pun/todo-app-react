import React, { useCallback } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import "./style.css";

type Props = {
  todo: any;
  removeTodo: (todo: any) => void;
  onCompletedPressed: (todo: any) => void;
};

const TodoListItem: React.FC<Props> = ({
  todo,
  removeTodo,
  onCompletedPressed,
}) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteTodo = useCallback(
    (todo: ITodo) => dispatch(removeTodo(todo._id)),
    [dispatch, removeTodo]
  );

  const completeTodo = useCallback(
    (todo: ITodo) => dispatch(onCompletedPressed(todo._id)),
    [dispatch, onCompletedPressed]
  );

  return (
    <div className="todo-item-container">
      <div className="todo-content">
        {todo.isCompleted ? (
          <input className="todo-content-box" type="checkbox" defaultChecked />
        ) : (
          <input
            className="todo-content-box"
            type="checkbox"
            onClick={() => completeTodo(todo)}
          />
        )}

        <h3 className="todo-content-title">{todo.text}</h3>
      </div>
      <div className="remove-content">
        <button className="remove-button" onClick={() => deleteTodo(todo)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
