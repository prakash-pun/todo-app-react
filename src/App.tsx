import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
