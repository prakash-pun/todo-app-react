import faker from "faker";
import { getCompletedTodos } from "../redux/selector";

describe("The getCompletedTodos selector", () => {
  it("Returns only completed todos", () => {
    const fakeTodos = [
      {
        _id: "1",
        text: "Say Hello",
        isCompleted: true,
      },
      {
        _id: faker.random.word(),
        text: "Say Goodbye",
        isCompleted: false,
      },
      {
        _id: faker.random.word(),
        text: "Climb Mount Everest",
        isCompleted: false,
      },
    ];
    const expected = [
      {
        _id: "1",
        text: "Say Hello",
        isCompleted: true,
      },
    ];
    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).toEqual(expected);
  });
});
