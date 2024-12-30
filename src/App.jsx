import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddNewProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddNewProject(newProjectData) {
    setProjectsState((prevState) => {
      const projectId = Math.round(Math.random());
      const newProject = {
        ...newProjectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddNewProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreateProject={handleStartAddNewProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onCreateProject={handleStartAddNewProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
