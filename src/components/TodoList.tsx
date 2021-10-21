import React from "react";
import TodoListItem from "./TodoListItem";
import useTodo from "../hooks/useTodo";
import TodoIcon from "./TodoIcon";
import NewTodo from "./NewTodo";
import Loading from "./Loading";
import "./style.css";

const TodoList: React.FC = () => {
  const [
    todos,
    isLoading,
    incompleteTodos,
    completeTodos,
    todo,
    handleTodoData,
    addNewTodo,
    deleteTodo,
    completeTodo,
  ] = useTodo();

  return (
    <div className="main-container">
      <NewTodo
        todo={todo}
        handleTodoData={handleTodoData}
        addTodo={addNewTodo}
      />
      <div className="task-heading">
        <h2>My Task</h2>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="todo-container">
            {todos.length <= 0 ? (
              <TodoIcon />
            ) : (
              incompleteTodos.map((todo: ITodo) => (
                <TodoListItem
                  key={todo._id}
                  todo={todo}
                  removeTodo={deleteTodo}
                  onCompletedPressed={completeTodo}
                />
              ))
            )}
          </div>
          {completeTodos.length > 0 ? (
            <div className="todo-container">
              <h3 className="complete">Completed</h3>
              {completeTodos.map((todo: ITodo) => (
                <TodoListItem
                  key={todo._id}
                  todo={todo}
                  removeTodo={deleteTodo}
                  onCompletedPressed={completeTodo}
                />
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
};

export default TodoList;
