import './index.css';

function AddProjects() {
  const sendData = () => {
    const projectForm = document.querySelector('form');
    const formData = new FormData(projectForm);

    fetch('http://localhost:3001/api/project', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}` // Inclure le token JWT dans l'en-tête
        }
    })
      .then(response => response.json())
      .then(data => {
      console.log(data)
      })
      .catch(error => {
      console.log(error)
    })
    
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
            <button type='button' onClick={sendData}>Envoyer</button>
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