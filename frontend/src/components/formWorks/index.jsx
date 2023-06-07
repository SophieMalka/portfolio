import React, { useEffect, useState } from 'react';
import './index.css';

function FormWorks({ classForm, functionForm, selectedProject }) {
  const [selectedImageURL, setSelectedImageURL] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.getElementById('title').value = selectedProject.title;
      document.getElementById('description').value = selectedProject.description;
      document.getElementById('link').value = selectedProject.link;
    } else {
      resetForm();
    }
  }, [selectedProject]);

  function resetForm() {
    document.getElementById('imgUrl').value = '';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('link').value = '';
    setSelectedImageURL(null);
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImageURL(imageURL);
    }
  }

  return (
    <section className={classForm}>
      <form className='form-add-work'>
        <label htmlFor='imgUrl'>Image</label>
        <input type='file' name='imgUrl' id='imgUrl' onChange={handleImageChange}></input>
        {selectedImageURL && <img src={selectedImageURL} alt='Selected' className='selected-image' />}
        <label htmlFor='title'>Titre</label>
        <input type='text' name='title' id='title'></input>
        <label htmlFor='description'>Description</label>
        <input type='text' name='description' id='description'></input>
        <label htmlFor='link'>Lien</label>
        <input type='text' name='link' id='link'></input>
        <button type='button' onClick={functionForm}>Envoyer</button>
      </form>
    </section>
  );
}

export default FormWorks;
