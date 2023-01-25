import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import TaskList from "./Components/TaskList/TaskList";
import "./styles.css";

let AccId = 0;
const generateId = () => {
  AccId = AccId + 1;
  return AccId;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const AddTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return tasks.filter((task) => task.id !== id);
    });
  };
  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          taskState="Pendente"
          onAddTask={AddTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={AddTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Completada"
          taskState="Completada"
          onAddTask={AddTask}
          tasks={tasks.filter((t) => t.state === "Completada")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
