import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { todos } from "./todo/todoReducer";
import userReducer from "./user/userReducer";

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// const store: Store<TodoState, TodoAction> & {
//   dispatch: DispatchType;
// } = createStore(todos, composeWithDevTools(applyMiddleware(thunk)));

export default store;
