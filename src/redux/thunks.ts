import axios from "axios";
import { Dispatch } from "redux";
import {
  createTodo,
  removeTodo,
  markTodoAsCompleted,
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
} from "./todo/todoAction";

export const loadTodos = () => async (dispatch: Dispatch) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await axios.get("http://localhost:8080/todos");
    const todos = response.data;
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
  }
};

export const addTodoRequest = (text: string) => async (dispatch: Dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });

    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    console.log(e);
  }
};

export const removeTodoRequest = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    console.log(e);
  }
};

export const markTodoAsCompltedRequest =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:8080/todos/${id}/completed`,
        {
          method: "post",
        }
      );
      const updatedTodo = await response.json();
      dispatch(markTodoAsCompleted(updatedTodo));
    } catch (e) {
      console.log(e);
    }
  };

export const displayAlert = (text: string) => () => {
  alert(`You clicked on: ${text}`);
};
