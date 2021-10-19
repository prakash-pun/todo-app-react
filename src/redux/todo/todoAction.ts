import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./todoTypes";

export const createTodo = (todo: ITodo) => ({
  type: CREATE_TODO,
  payload: todo,
});

export const removeTodo = (todo: ITodo) => ({
  type: REMOVE_TODO,
  payload: todo,
});

export const markTodoAsCompleted = (todo: ITodo) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { todo },
});

export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const loadTodosSuccess = (todos: any) => {
  return {
    type: LOAD_TODOS_SUCCESS,
    payload: todos,
  };
};

export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
