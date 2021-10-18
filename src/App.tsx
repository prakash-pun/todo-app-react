import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
};

export default App;
