import './index.css';
import Background from '../../components/background';

function Contact() {
    return (
        <section id='contact' className='contact'>
            <Background />
            <div className='contact-container'>
                <h2 className='contact-title'>
                    <span className='contact-title-first'>Contactez-moi</span>
                </h2>
                <div className='contact-content'>
                    <form className='contact-form'>
                        <label htmlFor='name'>Nom et prénom</label>
                        <input className='input-form-contact' type="text" id="name" name="name" required />
                        <label htmlFor='email'>Adresse email</label>
                        <input className='input-form-contact' type='email' id='email' name='email' required />
                        <label htmlFor='tel'>Téléphone</label>
                        <input className='input-form-contact' type='tel' id='tel' name='tel' />
                        <label htmlFor='object'>Objet</label>
                        <input className='imput-form-contact' type='text' id='object' name='object' required />
                        <label htmlFor='message'>Message</label>
                        <textarea className='textarea-form-contact' id='message' name='message' required />
                        <button type='submit'>Envoyer</button>
                     </form>
                </div>
            </div>
        </section>
    )
}

export default Contact