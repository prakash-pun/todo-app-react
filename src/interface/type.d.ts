interface ITodo {
  _id: string;
  text: string;
  isCompleted: boolean;
  createdAt?: Date;
}

type TodoState = {
  isLoading: boolean;
  todos: ITodo[];
};

type TodoAction = {
  type: string;
  payload: ITodo;
};

type DispatchType = (args: TodoAction) => TodoAction;
