import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodo from "./NewTodo";
import TodoListItem from "./TodoListItem";
import "./style.css";
import {
  loadTodos,
  markTodoAsCompltedRequest,
  removeTodoRequest,
} from "../redux/thunks";
import Loading from "./Loading";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "../redux/selector";

type Props = {
  incompleteTodos: any;
  completedTodos: any;
  fetchTodo: () => void;
  isLoading: boolean;
  onRemovePressed: (id: string) => void;
  onCompletedPressed: (id: string) => void;
};

const TodoList: React.FC<Props> = ({
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
    <div>
      <NewTodo />
      <div className="task-heading">
        <h2>My Task</h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="todo-container">
          {incompleteTodos.map((todo: ITodo) => (
            <TodoListItem
              key={todo._id}
              todo={todo}
              onRemovePressed={onRemovePressed}
              onCompletedPressed={onCompletedPressed}
            />
          ))}
          <h3>Completed</h3>
          {completedTodos.map((todo: ITodo) => (
            <TodoListItem
              key={todo._id}
              todo={todo}
              onRemovePressed={onRemovePressed}
              onCompletedPressed={onCompletedPressed}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: getTodosLoading(state),
    incompleteTodos: getIncompleteTodos(state),
    completedTodos: getCompletedTodos(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodo: () => dispatch(loadTodos()),
    onRemovePressed: (id: string) => dispatch(removeTodoRequest(id)),
    onCompletedPressed: (id: string) => dispatch(markTodoAsCompltedRequest(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
