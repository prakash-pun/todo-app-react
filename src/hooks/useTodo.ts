import { useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "../redux/selector";
import {
  addTodoRequest,
  loadTodos,
  markTodoAsCompletedRequest,
  removeTodoRequest,
} from "../redux/thunks";

const useTodo = () => {
  const todos: readonly ITodo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  );

  const isLoading: boolean = useSelector((state: TodoState) =>
    getTodosLoading(state)
  );

  const incompleteTodos: readonly ITodo[] = useSelector((state: TodoState) =>
    getIncompleteTodos(state)
  );

  const completeTodos: readonly ITodo[] = useSelector((state: TodoState) =>
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

  const deleteTodo = useCallback(
    (todo: ITodo) => dispatch(removeTodoRequest(todo._id)),
    [dispatch]
  );

  const completeTodo = useCallback(
    (todo: ITodo) => dispatch(markTodoAsCompletedRequest(todo._id)),
    [dispatch]
  );

  return [
    todos,
    isLoading,
    incompleteTodos,
    completeTodos,
    todo,
    handleTodoData,
    addNewTodo,
    deleteTodo,
    completeTodo,
  ];
};

export default useTodo;
