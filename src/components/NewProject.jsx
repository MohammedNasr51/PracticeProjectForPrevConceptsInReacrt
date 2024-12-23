import React from "react";
import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end items-center gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">cancle</button>
        </li>
        <li>
          <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md">save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" type="text" />
        <Input label="Discription" isTextarea />
        <Input label="Due Date" type="text" />
      </div>
    </div>
  );
}
