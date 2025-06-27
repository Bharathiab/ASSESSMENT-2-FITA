// // src/TodoApp.js
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Add task
  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task.trim()]);
      setTask("");
    }
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Todo App 📝</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          value={task}
          className="form-control"
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {todoList.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <FaTrash
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => deleteTask(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
