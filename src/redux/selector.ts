import { createSelector } from "reselect";

export const getTodos = (state: TodoState) => state.todos;
export const getTodosLoading = (state: TodoState) => state.todos;

export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
