import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddNewProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreateProject={handleAddNewProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onCreateProject={handleAddNewProject} />
      {content}
    </main>
  );
}

export default App;
