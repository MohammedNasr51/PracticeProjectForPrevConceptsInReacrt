export default function SelectedProject({ project, onDelete }) {
  let formatedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const { title, description, dueDate } = project;
  return (
    <div className="w-[35rem] mt-16">
      <header className="border-b-2 border-stone-300 pb-4 mb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400 ">{dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      tasks
    </div>
  );
}
