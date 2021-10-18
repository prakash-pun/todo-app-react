import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/selector";
import { addTodoRequest } from "../redux/thunks";
import "./style.css";

type Props = {
  todos: any;
  onCreatePressed: (text: string) => void;
};

const NewTodo: React.FC<Props> = ({ todos, onCreatePressed }) => {
  const [text, setText] = useState("");

  return (
    <div className="form-container">
      <input
        className="todo-input"
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo: ITodo) => todo.text === text
          );
          if (!isDuplicateText) {
            console.log("ram");
            onCreatePressed(text);
            setText("");
          } else {
            setText("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state: TodoState) => {
  return {
    todos: getTodos(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCreatePressed: (text: string) => dispatch(addTodoRequest(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
