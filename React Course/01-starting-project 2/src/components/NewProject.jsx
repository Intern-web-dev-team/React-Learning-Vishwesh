import Input from './Input.jsx';


function NewProject(){
    return(
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
             <li><button className="px-4 py-2 bg-stone-500 rounded text-white hover:bg-stone-400">Cancel</button></li>
             <li><button className="px-4 py-2 bg-stone-900 text-white rounded hover:bg-stone-700">Save</button></li>
            </menu>
            <div>
                <Input label="Project Name" isTextArea={false}/>
                <Input label="Project Description" isTextArea={true}/>
                <Input label="Project Status" isTextArea={false}/>
            </div>
        </div>
    );
}

export default NewProject;