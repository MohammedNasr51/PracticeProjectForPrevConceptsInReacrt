import React from "react";
import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancle }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();
  const handleSave = () => {
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const dueDate = dueDateRef.current.value;
    //validation
    if (title.trim() === "" || desc.trim() === "" || dueDate.trim() === "") {
      modalRef.current.open();
      return;
    }
    onAdd({
      title: title,
      description: desc,
      dueDate: dueDate,
    });
  };
  return (
    <>
      <Modal buttonCaption="Okey" ref={modalRef}>
        <h2 className="font-bold text-stone-700 text-xl my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops...look like you forget to enter a value{" "}
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you enter a valid data for each input
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancle}
            >
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
    </>
  );
}
