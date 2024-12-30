import React from "react";
import Input from "./Input";
import { useRef } from "react";
export default function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();
  const handleSave = () => {
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const dueDate = dueDateRef.current.value;
    //validation
    onAdd({
      title: title,
      description: desc,
      dueDate: dueDate,
    });
  };
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end items-center gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            cancle
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md"
            onClick={handleSave}
          >
            save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" type="text" />
        <Input ref={descRef} label="Discription" isTextarea />
        <Input ref={dueDateRef} label="Due Date" type="date" />
      </div>
    </div>
  );
}
