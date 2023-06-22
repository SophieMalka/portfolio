import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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

  function handleInputChange(event, name) {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function sendData() {
    functionForm(formData);
  }

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // Les options de mise en forme du texte
    ['link'], // Option pour ajouter un lien
    [{ 'align': [] }], // Options d'alignement du texte
    [{ 'list': 'ordered'}, { 'list': 'bullet' }] // Options de liste ordonnée et de liste à puces
  ];

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
          onChange={(event) => handleInputChange(event, 'title')}
        ></input>
        <label htmlFor='description'>Description</label>
        <ReactQuill
          className='react-quill-editor'
          name='description'
          value={formData.description}
          onChange={(value) => handleInputChange({ target: { value } }, 'description')}
          modules={{
            toolbar: toolbarOptions // Spécifiez les options de la barre d'outils
          }}
        />
        <label htmlFor='link'>Lien</label>
        <input
          type='text'
          name='link'
          id='link'
          value={formData.link}
          onChange={(event) => handleInputChange(event, 'link')}
        ></input>
        <button type='button' onClick={sendData}>
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default FormWorks;
