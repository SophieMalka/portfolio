import React, { useEffect, useState } from 'react';
import './index.css';
import Card from '../../components/card';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const displayProjects = () => {
    return projects.map(project => (
      <Card
        page={"visit"}
        key={project.id}
        image={project.imgUrl}
        title={project.title}
        description={project.description}
        link={project.link}
        
      />
    ));
  };

  return (
    <section id='projects' className='projects'>
      <div className='projects-container'>
        <h2 className='projects-title'>
          <span className='projects-title-first'>Mes projets</span>
          <span className='projects-title-sec'>
            Découvrez mes compétences en visualisant mes réalisations.
          </span>
        </h2>
        <div className='gallery'>{displayProjects()}</div>
      </div>
    </section>
  );
}

export default Projects;
