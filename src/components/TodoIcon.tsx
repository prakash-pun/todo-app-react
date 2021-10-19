import task from "../task.svg";
import "./style.css";

const TodoIcon = () => {
  return (
    <div className="icon-container">
      <img src={task} className="task-icon" alt="task" />
    </div>
  );
};

export default TodoIcon;
