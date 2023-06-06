import './index.css';

function AddProjects() {
function handleSubmit() {
  const formData = new FormData();
  formData.append('imgUrl', document.getElementById('imgUrl').files[0]);
  formData.append('title', document.getElementById('title').value);
  formData.append('description', document.getElementById('description').value);
  formData.append('link', document.getElementById('link').value);

  fetch('http://localhost:3001/api/projects', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      // Traitement des données après l'envoi réussi
      console.log(response)
    })
    .catch(error => {
      // Gestion des erreurs lors de l'envoi
    });
}
  if (sessionStorage.getItem("token")) {
    return (
      <section id='projects' className='projects'>
        <div className='projects-container'>
          <h2 className='projects-title'>
            <span className='projects-title-first'>Ajouter un projet</span>
          </h2>
          <form className='form-add-work'>
            <label htmlFor='imgUrl'>Image</label>
            <input type='file' name='imgUrl' id='imgUrl'></input>
            <label htmlFor='title'>Titre</label>
            <input type='text' name='title' id='title'></input>
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' id='description'></input>
            <label htmlFor='link'>Lien</label>
            <input type='text' name='link' id='link'></input>
            <button type='button' onClick={handleSubmit}>Envoyer</button>
          </form>
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