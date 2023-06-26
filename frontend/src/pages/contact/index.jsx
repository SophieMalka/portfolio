import React from 'react';
import './index.css';
import Background from '../../components/background';
import Modal from '../../components/modal';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      tel: event.target.tel.value,
      object: event.target.object.value,
      message: event.target.message.value,
    };

    fetch('/api/mail/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert('Message envoyé avec succès');
        closeModal();
      })
      .catch((error) => {
        console.error('Erreur :', error);
        alert('Erreur lors de l\'envoi du message');
      });
  };

    function openModal() {
    const form = document.querySelector('form');
    form.reset();
    const modal = document.querySelector('#modal-contact');
    modal.style.display = 'flex';
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
  }

  function closeModal() {
    const modal = document.querySelector('#modal-contact');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
  }

  return (
    <section id='contact' className='contact'>
      <Background />
      <div className='contact-container'>
        <h2 className='contact-title'>
          <span className='contact-title-first'>Contactez-moi</span>
        </h2>
        <div className='contact-content'>
          <div className='contact-reseaux'>
            <a className='social-link' href='https://www.linkedin.com/in/sophie-malka-ba3511114'><i class="fa-brands fa-linkedin"></i></a>
            <a className='social-link' href='https://github.com/SophieMalka'><i class="fa-brands fa-github"></i></a>
          </div>
          <h3 className='contact-content-title'>Téléphone</h3>
          <p>06 23 91 78 49</p>
          <h3 className='contact-content-title'>Localisation</h3>
          <p>Nice (06)</p>
          <button className='open-modal' onClick={openModal}>
            Formulaire de contact
          </button>
            <Modal
              page="visit"
              closeModal={closeModal}
              contentModal={
                <form className='contact-form' onSubmit={handleSubmit}>
                  <label htmlFor='name'>Nom et prénom</label>
                  <input className='input-form-contact' type='text' id='name' name='name' required />
                  <label htmlFor='email'>Adresse email</label>
                  <input className='input-form-contact' type='email' id='email' name='email' required />
                  <label htmlFor='tel'>Téléphone</label>
                  <input className='input-form-contact' type='tel' id='tel' name='tel' />
                  <label htmlFor='object'>Objet</label>
                  <input className='input-form-contact' type='text' id='object' name='object' required />
                  <label htmlFor='message'>Message</label>
                  <textarea className='textarea-form-contact' id='message' name='message' required />
                  <button type='submit'>Envoyer</button>
                </form>
              }
            />
          </div>
        </div>
    </section>
  );
}

export default Contact;
