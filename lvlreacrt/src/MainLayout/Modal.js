import React, { useState } from "react";
import "./Modal.css";

export default function Modal({children}) {
    const [modal, setmodal] = useState(false);

    const toggleModal = () => {
        setmodal(!modal)
    }

    return (
        <div className="main-btn-modal">
            <button className="btn-modal" onClick={toggleModal} >Add Product</button>
            {modal && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <div className="weather-oneday">
                           {children}
                        </div>
                        <button className='close-modal' onClick={() => { setmodal(!modal) }}>
                            X
                        </button>
                    </div>
                </div>
            )}


        </div>
    )
}