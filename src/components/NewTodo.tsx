import React, { useState } from "react";
import "./style.css";

type Props = {
  addTodo: (todo: ITodo) => void;
};

const NewTodo: React.FC<Props> = ({ addTodo }) => {
  const [todo, setTodo] = useState<any | {}>();

  const handleTodoData = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewTodo = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="form-container">
      <form onSubmit={addNewTodo}>
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
