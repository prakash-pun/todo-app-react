import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodo from "./NewTodo";
import TodoListItem from "./TodoListItem";
import "./style.css";
import { loadTodos } from "../redux/thunks";
import Loading from "./Loading";

type Props = {
  todoData: ITodoObject;
  fetchTodo: () => void;
};

const TodoList: React.FC<Props> = ({ todoData, fetchTodo }) => {
  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);
  return (
    <div>
      <NewTodo />
      <div className="task-heading">
        <h2>My Task</h2>
      </div>
      {todoData.isLoading ? (
        <Loading />
      ) : (
        <div className="todo-container">
          {todoData &&
            todoData.todos &&
            todoData.todos.map((todo: ITodo) => (
              <TodoListItem key={todo._id} todo={todo} />
            ))}
        </div>
      )}
    </div>
  );
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
