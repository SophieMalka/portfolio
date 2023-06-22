import React, { useEffect, useState } from 'react';
import './index.css';

function FormWorks({ classForm, functionForm, selectedProject }) {
  const [formData, setFormData] = useState({
    imgUrl: '',
    title: '',
    description: '',
    link: ''
  });
  const [selectedImageURL, setSelectedImageURL] = useState('');

  useEffect(() => {
    if (selectedProject) {
      setFormData(selectedProject);
      setSelectedImageURL(selectedProject.imgUrl);
    } else {
      resetForm();
    }
  }, [selectedProject]);

  function resetForm() {
    setFormData({
      imgUrl: '',
      title: '',
      description: '',
      link: ''
    });
    setSelectedImageURL('');
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          imgUrl: file
        }));
        setSelectedImageURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function sendData() {
    functionForm(formData);
  }

  return (
    <section className={classForm}>
      <form className='form-add-work'>
        <label htmlFor='imgUrl'>Image</label>
        <input type='file' name='imgUrl' id='imgUrl' onChange={handleImageChange}></input>
        {selectedImageURL && <img src={selectedImageURL} alt='Selected' className='selected-image' />}
        <label htmlFor='title'>Titre</label>
        <input
          type='text'
          name='title'
          id='title'
          value={formData.title}
          onChange={handleInputChange}
        ></input>
        <label htmlFor='description'>Description</label>
        <textarea
          type='text'
          name='description'
          id='description'
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor='link'>Lien</label>
        <input
          type='text'
          name='link'
          id='link'
          value={formData.link}
          onChange={handleInputChange}
        ></input>
        <button type='button' onClick={sendData}>
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default FormWorks;
