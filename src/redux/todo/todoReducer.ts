import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./todoTypes";

const initialState: TodoState = { isLoading: false, todos: [] };

export const todos = (
  state: TodoState = initialState,
  action: any
): TodoState => {
  switch (action.type) {
    case CREATE_TODO:
      const newTodo: ITodo = action.todo;
      return {
        ...state,
        todos: state.todos.concat(newTodo),
      };

    case REMOVE_TODO:
      const removeTodo: ITodo[] = state.todos.filter(
        (todo) => todo.id !== action.todo.id
      );

      return {
        ...state,
        todos: removeTodo,
      };

    case MARK_TODO_AS_COMPLETED:
      const updatedTodo: ITodo[] = state.todos.filter(
        (todo) => todo.id !== action.todo.id
      );

      return {
        ...state,
        todos: updatedTodo,
      };

    case LOAD_TODOS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        todos: action.todo,
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
