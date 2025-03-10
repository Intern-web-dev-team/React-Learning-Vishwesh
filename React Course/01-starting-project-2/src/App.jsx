import { useState } from "react";
import  ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx"; 

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }else if(projectsState.selectedProjectId ===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
    
   return{
    ...prevState,
    selectedProjectId: undefined,
    projects:[...prevState.projects, newProject]
    };
    });
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {/* <NoProjectSelected onStartAddProject={handleStartAddProject}/> */}
      {content}
    </main>
  );
}

export default App;
