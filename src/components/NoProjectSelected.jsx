import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onCreateProject }) {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        className="size-16 object-contain mx-auto"
        src={noProjectImg}
        alt="No project"
      />
      <h2 className="font-bold text-stone-500 text-xl my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onCreateProject}>Create New Project</Button>
      </p>
    </div>
  );
}
