import './index.css';
import FormWorks from '../../components/formWorks';

function AddProjects() {
  function handleSubmit() {
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
        console.log(response)
        alert('Projet créé !');
        form.reset();
      })
      .catch(error => {
        console.log(error)
      });
  }
  
  if (sessionStorage.getItem("token")) {
    return (
      <section id='projects' className='projects'>
        <div className='projects-container'>
          <h2 className='projects-title'>
            <span className='projects-title-first'>Ajouter un projet</span>
          </h2>
          <FormWorks
            classForm={'form-add-word'}
            functionForm={handleSubmit}
          />
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