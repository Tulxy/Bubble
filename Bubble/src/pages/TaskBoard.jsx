import { useState } from "react";

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const now = new Date();
    const timestamp = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;

    setTasks([...tasks, { text: inputValue, time: timestamp, completed: false }]);
    setInputValue("");
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="w-75 m-5">
      <h1>📚 Tasks - {new Date().getMonth() + 1}.{new Date().getDate()}.</h1>

      <form onSubmit={addTask} className="d-flex gap-2 mb-2">
        <input
          placeholder="Add Task"
          type="text"
          className="task-input form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="AddTaskBtn btn bg-primary text-white border border-primary border-opacity-10 border-4"
        >
          Přidat
        </button>
      </form>

      <ul className="task-list list-group">
        <li className="list-group-item mt-2"><h2>Task list</h2></li>
        {tasks.map((task, index) => (
          <li
            className={`border d-flex justify-content-between list-group-item list-group-item-action ${task.completed ? 'bg-success text-white' : ''}`}
            key={index}
          >
            {task.text}
            <span className="d-flex align-items-center">
              {task.time}
              <input
                type="checkbox"
                className="form-check-input p-2 ms-2"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskBoard;
