import Button from "./Button";

function ProjectSideBar({ onStartAddProject, projects = [] }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {/* Add project items here */}
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left py-1 px-2 rounded-sm my-1 text-stone-400 hover:bg-stone-600">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ProjectSideBar;
