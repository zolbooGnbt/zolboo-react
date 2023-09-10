import { useState } from "react";
import Write from "./WritePost";
import { Pen } from "react-bootstrap-icons";

const Modal = () => {
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
    };

    const hideModal = () => {
        setModal(false);
    };
    return (
        <>
            {
                modal ? <Write show={modal} hide={hideModal} />
                    : <button onClick={showModal} className='fixed right-8 bottom-8 w-24 h-24 bg-blue-400 rounded-full  text-cyan-50'>
                        <Pen className="text-2xl text-cyan-50 ml-8"/>
                        new post
                        </button>
            }
        </>
    )
}

export default Modal