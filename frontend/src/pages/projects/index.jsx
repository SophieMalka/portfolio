import './index.css';

function Projects(props) {
  if (props.page === 'admin') {
    return (
      <section id='projects' className='projects'>
        <div className='projects-container'>
          <h2 className='projects-title'>
            <span className='projects-title-first'>Ajouter un projet</span>
            <span className='projects-title-sec'>Découvrez mes compétences en visualisant mes réalisations.</span>
          </h2>
        </div>
      </section>
    );
  } else {
    return (
      <section id='projects' className='projects'>
        <div className='projects-container'>
          <h2 className='projects-title'>
            <span className='projects-title-first'>Mes projets</span>
            <span className='projects-title-sec'>Découvrez mes compétences en visualisant mes réalisations.</span>
          </h2>
        </div>
      </section>
    );
  }
}

export default Projects;
