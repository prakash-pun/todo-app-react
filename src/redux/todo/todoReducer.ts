import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./todoTypes";

const initialState: TodoState = { isLoading: false, todos: [] };

export const todos = (state = initialState, action: any): TodoState => {
  switch (action.type) {
    case CREATE_TODO:
      const newTodo: ITodo = action.payload;
      return {
        ...state,
        todos: state.todos.concat(newTodo),
      };

    case REMOVE_TODO:
      const removeTodo: ITodo[] = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );

      return {
        ...state,
        todos: removeTodo,
      };

    case MARK_TODO_AS_COMPLETED:
      const { todo: updatedTodo } = action.payload;

      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo._id === updatedTodo._id) {
            return updatedTodo;
          }
          return todo;
        }),
      };

    case LOAD_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };

    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };

    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        todos: [],
        isLoading: false,
      };

    default:
      return state;
  }
};
