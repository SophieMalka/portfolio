import React, { useEffect, useState } from 'react';
import './index.css';
import FormWorks from '../../components/formWorks';
import Modal from '../../components/modal';
import Card from '../../components/card';

function AddProjects() {
  const [projects, setProjects] = useState([]);
  const [getProjects, setGetProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, [getProjects, selectedProject]);

  function openModal() {
    const form = document.querySelector('form');
    form.reset();
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

    setGetProjects(true);
  }

  function sendData() {
    const formData = new FormData();
    formData.append('imgUrl', document.getElementById('imgUrl').files[0]);
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('link', document.getElementById('link').value);

    if (selectedProject) {
      // Utiliser la méthode PUT pour mettre à jour un projet existant
      fetch(`http://localhost:3001/api/projects/${selectedProject.id}`, {
        method: 'PUT',
        body: formData,
      })
        .then(response => {
          console.log(response);
          alert('Projet mis à jour !');
          setSelectedProject(null);
          closeModal();
          setGetProjects(true); // Mettre à jour les projets après la modification
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // Utiliser la méthode POST pour créer un nouveau projet
      fetch('http://localhost:3001/api/projects', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          console.log(response);
          alert('Projet créé !');
          closeModal();
          setGetProjects(true); // Mettre à jour les projets après la création
        })
        .catch(error => {
          console.log(error);
        });
    }
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

  const getProject = (id) => {
    fetch(`http://localhost:3001/api/projects/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error fetching project data');
      })
      .then(data => {
        setSelectedProject(data);
        openModal();
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
        updateFunction={() => getProject(project.id)}
        deleteFunction={() => deleteProject(project.id)}
        page="admin"
      />
    ));
  };

  function resetSelectedProject() {
    setSelectedProject(null);
  }

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
            contentModal={
              <FormWorks
                classForm={'form-add-word'}
                functionForm={sendData}
                selectedProject={selectedProject}
              />
            }
            onClose={closeModal}
            onResetSelectedProject={resetSelectedProject}
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
