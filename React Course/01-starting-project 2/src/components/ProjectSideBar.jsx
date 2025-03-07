function ProjectSideBar(){
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">My Projects</h2>
            <div>
                <button className="w-full py-2 mb-4 text-center bg-stone-800 text-stone-50 rounded-lg hover:bg-stone-700 transition duration-300">
                    + Add Project
                </button>
            </div>
            <ul>
                {/* Add project items here */}
            </ul>
        </aside>
    );
}

export default ProjectSideBar;