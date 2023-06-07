import './index.css';

function Modal({ contentModal }) {
    function closeModal() {
        const modal = document.querySelector('#modal');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        modal.removeAttribute('aria-modal');
    };

    return (
        <aside id="modal" aria-hidden="true" role="dialog" >
            <div class="modal-wrapper modal-wrapper-add js-stop-modal">
                <div className='modal-nav'>
                    <button className='modal-close-button' onClick={closeModal}><i className='fa-solid fa-xmark'></i></button>
                </div>
                {contentModal}
            </div>
        </aside>
    )
};

export default Modal