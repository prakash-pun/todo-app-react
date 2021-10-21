import React from "react";
import "./style.css";

type Props = {
  todo: ITodo;
  handleTodoData: any;
  addTodo: (todo: ITodo | any) => void;
};

const NewTodo: React.FC<Props> = ({ todo, handleTodoData, addTodo }) => {
  return (
    <div className="form-container">
      <form onSubmit={addTodo}>
        <input
          className="todo-input"
          type="text"
          id="text"
          placeholder="Add a task"
          onChange={handleTodoData}
        />
        <button disabled={!todo} className="new-todo-button">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
