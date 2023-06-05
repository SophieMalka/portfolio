import './index.css';

function AddProjects() {
  console.log(sessionStorage.getItem("token"))
  if (sessionStorage.getItem("token")) {
    return (
      <section id='projects' className='projects'>
        <div className='projects-container'>
          <h2 className='projects-title'>
            <span className='projects-title-first'>Ajouter un projet</span>
          </h2>
        </div>
      </section>
    )
  } else {
    return (
      <p>non authorisé</p>
    )
  }
};

export default AddProjects