import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleClick() {
    if (enteredTask.trim().length <= 0) {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  function handleChange(event) {
    if (event.target.value.trim().length <= 0) {
      return;
    }
    setEnteredTask(event.target.value);
  }
  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 outline-stone-500"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
