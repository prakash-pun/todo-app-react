import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodo from "./NewTodo";
import TodoListItem from "./TodoListItem";
import "./style.css";
import { loadTodos } from "../redux/thunks";

type Props = {
  todoData: any;
  fetchTodo: any;
};

const TodoList: React.FC<Props> = ({ todoData, fetchTodo }) => {
  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);
  const content = (
    <div className="todo-container">
      <NewTodo />
      <h3>My Todo: </h3>
      <h3>{todoData}</h3>

      {todoData.todo.map((todo: ITodo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
  return content;
};

const mapStateToProps = (state: TodoState) => {
  return {
    todoData: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodo: () => dispatch(loadTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
