import { useRef } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

function NewProject({onAdd, onCancel}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const duedate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDuedate = duedate.current.value;

        if(
            enteredTitle.trim().length === 0 || 
            enteredDescription.trim().length === 0 || 
            enteredDuedate.trim().length === 0
        ){
            modal.current.open();  // Fix: Use modal.current instead of Modal.current
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            duedate: enteredDuedate,
        });
    }
    
    return (
        <>
            <Modal ref={modal} buttonCaption="Okay" className="w-[30%] max-w-[40rem}">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Please fill in all fields</p>
            </Modal>
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
             <li><button className="px-4 py-2 bg-stone-500 rounded text-white hover:bg-stone-400" onClick={onCancel}>Cancel</button></li>
             <li><button className="px-4 py-2 bg-stone-900 text-white rounded hover:bg-stone-700" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Project Name" isTextArea={false}/>
                <Input ref={description} label="Project Description" isTextArea={true}/>
                <Input type="date" ref={duedate} label="Project Status" isTextArea={false}/>
            </div>
        </div>
        </>
    );
}

export default NewProject;