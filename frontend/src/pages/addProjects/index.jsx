import React, { useEffect, useState } from 'react';
import './index.css';
import FormWorks from '../../components/formWorks';
import Modal from '../../components/modal';
import Card from '../../components/card';

function AddProjects() {
  const [projects, setProjects] = useState([]);
  const [updateProjects, setUpdateProjects] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, [updateProjects]);

  function openModal() {
    const modal = document.querySelector('#modal');
    modal.style.display = 'flex';
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
  }

  function closeModal() {
    const modal = document.querySelector('#modal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');

    setUpdateProjects(true);
  }

  function sendData() {
    const formData = new FormData();
    formData.append('imgUrl', document.getElementById('imgUrl').files[0]);
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('link', document.getElementById('link').value);

    const form = document.querySelector('form');

    fetch('http://localhost:3001/api/projects', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        // Traitement des données après l'envoi réussi
        console.log(response);
        alert('Projet créé !');
        form.reset();
        closeModal();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const deleteProject = (id) => {
    fetch(`http://localhost:3001/api/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          alert('Projet supprimé !');
          setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  const displayProjects = () => {
    return projects.map(project => (
      <Card
        key={project.id}
        projectId={project.id}
        image={project.imgUrl}
        title={project.title}
        description={project.description}
        deleteFunction={() => deleteProject(project.id)}
        page="admin"
      />
    ));
  };

  if (sessionStorage.getItem('token')) {
    return (
      <section id='projects' className='projects'>
        <div className='projects-container'>
          <h2 className='projects-title'>
            <span className='projects-title-first'>Gestion du portfolio</span>
          </h2>
          <button className='open-modal' onClick={openModal}>
            Ajouter un projet
          </button>
          <Modal
            contentModal={<FormWorks classForm={'form-add-word'} functionForm={sendData} />}
            onClose={closeModal}
          />
          <div className='gallery-projects'>{displayProjects()}</div>
        </div>
      </section>
    );
  } else {
    return <p>non autorisé</p>;
  }
}

export default AddProjects;
