import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 ">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length <= 0 && (
        <p className="text-stone-800 my-4">This project doesnot have tasks</p>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="flex justify-between items-center p-4 border-b-2 border-stone-300"
              >
                <span className="text-stone-600">{task.text}</span>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-stone-800 hover:text-red-500"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
