import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodo from "./NewTodo";
import TodoListItem from "./TodoListItem";
import Loading from "./Loading";
import "./style.css";
import TodoIcon from "./TodoIcon";
import {
  loadTodos,
  markTodoAsCompletedRequest,
  removeTodoRequest,
} from "../redux/thunks";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodos,
  getTodosLoading,
} from "../redux/selector";

type Props = {
  todos: any;
  incompleteTodos: any;
  completedTodos: any;
  fetchTodo: () => void;
  isLoading: boolean;
  onRemovePressed: (id: string) => void;
  onCompletedPressed: (id: string) => void;
};

const TodoList: React.FC<Props> = ({
  todos,
  fetchTodo,
  isLoading,
  incompleteTodos,
  completedTodos,
  onRemovePressed,
  onCompletedPressed,
}) => {
  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);
  return (
    <div className="main-container">
      <NewTodo />
      <div className="task-heading">
        <h2>My Task</h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="todo-container">
            {todos.length <= 0 ? (
              <TodoIcon />
            ) : (
              incompleteTodos.map((todo: ITodo) => (
                <TodoListItem
                  key={todo._id}
                  todo={todo}
                  onRemovePressed={onRemovePressed}
                  onCompletedPressed={onCompletedPressed}
                />
              ))
            )}
          </div>
          {completedTodos.length > 0 ? (
            <div className="todo-container">
              <h3 className="complete">Completed</h3>
              {completedTodos.map((todo: ITodo) => (
                <TodoListItem
                  key={todo._id}
                  todo={todo}
                  onRemovePressed={onRemovePressed}
                  onCompletedPressed={onCompletedPressed}
                />
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    todos: getTodos(state),
    isLoading: getTodosLoading(state),
    incompleteTodos: getIncompleteTodos(state),
    completedTodos: getCompletedTodos(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodo: () => dispatch(loadTodos()),
    onRemovePressed: (id: string) => dispatch(removeTodoRequest(id)),
    onCompletedPressed: (id: string) =>
      dispatch(markTodoAsCompletedRequest(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
