import React from 'react';
import './index.css';

function Modal({ contentModal, closeModal, page }) {
  if (page === 'admin') {
    return (
    <aside id="modal-add" aria-hidden="true" role="dialog">
      <div className="modal-wrapper modal-wrapper-add">
        <div className="modal-nav">
          <button className="modal-close-button" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {contentModal}
      </div>
    </aside>
  );
  } else if (page ==='visit') {
      return (
    <aside id="modal-contact" aria-hidden="true" role="dialog">
      <div className="modal-wrapper modal-wrapper-contact">
        <div className="modal-nav">
          <button className="modal-close-button" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {contentModal}
      </div>
    </aside>
  );
}
}

export default Modal;
