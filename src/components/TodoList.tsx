import React, { useEffect, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import TodoListItem from "./TodoListItem";
import TodoIcon from "./TodoIcon";
import NewTodo from "./NewTodo";
import Loading from "./Loading";
import "./style.css";
import {
  addTodoRequest,
  loadTodos,
  markTodoAsCompletedRequest,
  removeTodoRequest,
} from "../redux/thunks";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "../redux/selector";

const TodoList: React.FC = () => {
  const todos: readonly ITodo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  );

  const isLoadingg: boolean = useSelector((state: TodoState) =>
    getTodosLoading(state)
  );

  const incompleteTodoss: readonly ITodo[] = useSelector((state: TodoState) =>
    getIncompleteTodos(state)
  );

  const completeTodoss: readonly ITodo[] = useSelector((state: TodoState) =>
    getCompletedTodos(state)
  );

  const dispatch: Dispatch<any> = useDispatch();

  const addTodo = useCallback(
    (todo: ITodo) => dispatch(addTodoRequest(todo.text)),
    [dispatch]
  );

  const fetchTodos = useCallback(() => dispatch(loadTodos()), [dispatch]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  return (
    <div className="main-container">
      <NewTodo addTodo={addTodo} />
      <div className="task-heading">
        <h2>My Task</h2>
      </div>
      {isLoadingg ? (
        <Loading />
      ) : (
        <>
          <div className="todo-container">
            {todos.length <= 0 ? (
              <TodoIcon />
            ) : (
              incompleteTodoss.map((todo: ITodo) => (
                <TodoListItem
                  key={todo._id}
                  todo={todo}
                  removeTodo={removeTodoRequest}
                  onCompletedPressed={markTodoAsCompletedRequest}
                />
              ))
            )}
          </div>
          {completeTodoss.length > 0 ? (
            <div className="todo-container">
              <h3 className="complete">Completed</h3>
              {completeTodoss.map((todo: ITodo) => (
                <TodoListItem
                  key={todo._id}
                  todo={todo}
                  removeTodo={removeTodoRequest}
                  onCompletedPressed={markTodoAsCompletedRequest}
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

export default TodoList;
