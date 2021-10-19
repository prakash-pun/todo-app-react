import { todos } from "../redux/todo/todoReducer";

describe("The todos reducer", () => {
  it("Adds a new todo when CREATE_TODO action is received", () => {
    const fakeTodo = { text: "hello", isCompleted: false };
    const fakeAction = {
      type: "CREATE_TODO",
      payload: fakeTodo,
    };
    const originalState = { isLoading: false, todos: [] };
    const expected = {
      isLoading: false,
      todos: [fakeTodo],
    };
    const actual = todos(originalState, fakeAction);
    expect(actual).toEqual(expected);
  });
});
