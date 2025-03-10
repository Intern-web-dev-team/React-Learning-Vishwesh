import {forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({children, buttonCaption, className = ''}, ref) {
    const dialog = useRef();
    
    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
        }
    }));

    return createPortal(
        <dialog 
            ref={dialog} 
            className={`backdrop:bg-stone-900/90 p-4 rounded-md shadow-md ${className}`}
        >
            <div className="modal-content">
                {children}
            </div>
            <form method="dialog" className="mt-4 text-right">
                <button className="px-4 py-2 text-xs md:text-base bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950">
                    {buttonCaption}
                </button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;