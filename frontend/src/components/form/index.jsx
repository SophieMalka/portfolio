import './index.css';

function Form({classForm, functionForm}) {
    return (
        <section className={classForm}>
            <form className='form-add-work'>
                <label htmlFor='imgUrl'>Image</label>
                <input type='file' name='imgUrl' id='imgUrl'></input>
                <label htmlFor='title'>Titre</label>
                <input type='text' name='title' id='title'></input>
                <label htmlFor='description'>Description</label>
                <input type='text' name='description' id='description'></input>
                <label htmlFor='link'>Lien</label>
                <input type='text' name='link' id='link'></input>
                <button type='button' onClick={functionForm}>Envoyer</button>
          </form>
        </section>
    )
};

export default Form