import React, { useEffect, useState } from 'react';
import './index.css';
import FormWorks from '../../components/formWorks';
import Modal from '../../components/modal';
import Card from '../../components/card';
import Error from '../error';

function AddProjects() {
  const [projects, setProjects] = useState([]);
  const [getProjects, setGetProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('/api/projects/')
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

  function sendData(formData) {
    const formDataToSend = new FormData();
    formDataToSend.append('imgUrl', formData.imgUrl);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('link', formData.link);

    if (selectedProject) {
      // Utiliser la méthode PUT pour mettre à jour un projet existant
      fetch(`/api/projects/${selectedProject.id}`, {
        method: 'PUT',
        body: formDataToSend,
      })
        .then(response => {
          console.log(response);
          alert('Projet mis à jour !');
          setSelectedProject(null);
          closeModal();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // Utiliser la méthode POST pour créer un nouveau projet
      fetch('/api/projects', {
        method: 'POST',
        body: formDataToSend,
      })
        .then(response => {
          console.log(response);
          alert('Projet créé !');
          closeModal();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  const deleteProject = (id) => {
    fetch(`/api/projects/${id}`, {
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
    fetch(`/api/projects/${id}`)
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
        imgUrl={project.imgUrl}
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

  const logout = (event) => {
    event.preventDefault();
    sessionStorage.clear();
    window.location.replace('/admin2103/');
  };

  if (sessionStorage.getItem('token')) {
    return (
      <section id='projects' className='projects'>
        <div className='add-projects-container'>
          <button className='button-logout' onClick={logout}><i class="fa-solid fa-power-off"></i></button>
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
    return (
      <Error page='unauthorized'/>
    )
  }
}

export default AddProjects;