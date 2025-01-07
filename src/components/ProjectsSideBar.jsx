import Button from "./Button";
export default function ProjectsSideBar({
  onCreateProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onCreateProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "text-left py-1 px-2 my-1 rounded-sm w-full text-stone-400 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
