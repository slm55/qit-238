import React, { useState } from "react";
import "../assets/css/Modal.css"
import Login from "./Login";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Login />
            <button className="close-modal" onClick={toggleModal}>
              x
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}