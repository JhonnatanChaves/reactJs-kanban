import React from "react";
import "./tasklist.css";
import Proptypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

import plusIcon from "../../img/plus-icon.svg";

export default function TaskList({
  title,
  onAddTask,
  taskState,
  onTaskUpdate,
  tasks,
  onDeleteTask
}) {
  const AddTasks = () => {
    onAddTask("Nova tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={AddTasks} className="btn">
          Adicionar Tarefa <img src={plusIcon} alt="plus" />
        </button>
      </div>
    </div>
  );
}

TaskList.Proptypes = {
  title: Proptypes.string.isRequired,
  onAddTask: Proptypes.func.isRequired,
  tasks: Proptypes.array.isRequired
};
